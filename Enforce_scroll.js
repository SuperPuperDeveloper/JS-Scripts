let doc = document.body;


function return_scroll(){
doc.style.overflow = "scrolle";
doc.style.scroll = "auto";
doc.style.height = "100%";
}
document.addEventListener('scroll', function(e) {
  
   Let doc_scroll = doc.style.overflow;
   if (doc_scroll==="none") {
   return_scroll();

    });
  }
});

