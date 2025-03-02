import { CommonModule } from '@angular/common';
import { Quizzes } from '../../interface/interfaces';
import { QuizzesService } from './../../service/quizzes.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  constructor(private quizzeServise: QuizzesService) {}

  quizList: Quizzes[] = [];
  options: [] = [];

  ngOnInit(): void {
    this.quizzeServise.getQuizzes().subscribe((data: Quizzes[]) => {
      this.quizList = data;
    });
  }

  print() {
    const element = document.getElementById('content'); // HTML elementni tanlash
    if (!element) {
      console.error('Element topilmadi!');
      return;
    }

    html2canvas(element, {
      scale: 2, // Rasm sifatini oshirish
      useCORS: true, // Cross-origin resurslar uchun
      allowTaint: true, // Agar rasm manbalari boshqa domenlardan bo'lsa
    })
      .then((canvas) => {
        const imgWidth = 210; // A4 kengligi (mm)
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Rasm balandligi (mm)
        const pageHeight = 297; // A4 balandligi (mm)
        const pdf = new jsPDF('p', 'mm', 'a4'); // PDF yaratish

        let position = 0; // Boshlang'ich pozitsiya

        // PDF ga rasmni qo'shish
        while (position < imgHeight) {
          pdf.addImage(
            canvas,
            'PNG',
            0,
            position,
            imgWidth,
            imgHeight,
            undefined,
            'FAST'
          );
          position += pageHeight;

          // Agar rasm hali ham davom etsa, yangi sahifa qo'shish
          if (position < imgHeight) {
            pdf.addPage();
          }
        }

        // PDF ni yuklab olish
        pdf.save('quiz.pdf');
      })
      .catch((error) => {
        console.error('Xatolik yuz berdi:', error);
      });
  }
}
