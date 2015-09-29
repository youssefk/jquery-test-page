jQuery(document).ready(function() {
  jQuery("h1").click(function() {
    alert("this is the header.");
  });

  jQuery("p").click(function() {
    alert("You are clicking a paragraph");
  });

  jQuery("ul").dblclick(function() {
    alert("This is an unordered list item. You double clicked.");
  });

  jQuery("img").hover(function() {
    alert("Meow!");
  });

  jQuery("h2").dblclick(function() {
    alert("You are welcomed.");
  });
});
