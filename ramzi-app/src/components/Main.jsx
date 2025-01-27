import React from "react";
import "../App.css"; // Import CSS for styling

function Main() {
  const initState = {
    books: [
      {
        id: 1,
        title: "مقدمة ابن خلدون",
        author: "ابن خلدون",
        isbn: "1289499030",
      },
      {
        id: 2,
        title: "الحاوي في الطب",
        author: "ابو بكر الرازي",
        isbn: "893847239479",
      },
      {
        id: 3,
        title: "تفسير الجلالين",
        author: "جلال الدين المحلي",
        isbn: "984239402394",
      },
      {
        id: 4,
        title: "الأغاني",
        author: "أبو الفرج الأصفهاني",
        isbn: "328947239847",
      },
      {
        id: 5,
        title: "صحيح البخاري",
        author: "الإمام البخاري",
        isbn: "487239487234",
      },
      { id: 6, title: "الكتاب", author: "سيبويه", isbn: "849203948234" },
      {
        id: 7,
        title: "رسائل إخوان الصفا",
        author: "إخوان الصفا",
        isbn: "239487239487",
      },
      {
        id: 8,
        title: "نهج البلاغة",
        author: "الإمام علي بن أبي طالب",
        isbn: "784932049832",
      },
      {
        id: 9,
        title: "الكامل في اللغة والأدب",
        author: "المبرد",
        isbn: "498230482309",
      },
      { id: 10, title: "الحيوان", author: "الجاحظ", isbn: "983249823498" },
      {
        id: 11,
        title: "المعلقات السبع",
        author: "عدة شعراء",
        isbn: "324984239023",
      },
      {
        id: 12,
        title: "السياسة الشرعية",
        author: "ابن تيمية",
        isbn: "872398423984",
      },
      {
        id: 13,
        title: "ديوان المتنبي",
        author: "المتنبي",
        isbn: "234987239847",
      },
      {
        id: 14,
        title: "البيان والتبيين",
        author: "الجاحظ",
        isbn: "784392048230",
      },
      {
        id: 15,
        title: "الأدب الكبير والأدب الصغير",
        author: "ابن المقفع",
        isbn: "983247239847",
      },
    ],
  };

  return (
    <div>
      <h1 className="ramzi">كتبنا</h1>
      <div className="grid-container">
        {initState.books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>
              <strong>Author:</strong> {book.author}
            </p>
            <p>
              <strong>ISBN:</strong> {book.isbn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
