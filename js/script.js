/* ----------------------------------------------------------- */
/*  1. ScrollReveal
/* ----------------------------------------------------------- */

window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin:'bottom'
});
sr.reveal('.showcase-left', {
  duration: 2000,
  origin:'top',
  distance:'300px'
});
sr.reveal('.showcase-right', {
  duration: 2000,
  origin:'right',
  distance:'300px'
});
sr.reveal('.features', {
  duration: 1000,
  delay: 1000,
  origin:'bottom'
});
sr.reveal('.showcase-caption', {
  duration: 2000,
  origin:'bottom'
});

sr.reveal('.info-right', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});



/* ----------------------------------------------------------- */
/*   Contact form
/* ----------------------------------------------------------- */


(function ($) {
   'use strict';
   var form = $('.contact__form'),
       message = $('.contact__msg'),
       form_data;
   // Success function
   function done_func(response) {
       message.fadeIn().removeClass('alert-danger').addClass('alert-success');
       message.text(response);
       setTimeout(function () {
           message.fadeOut();
       }, 2000);
       form.find('input:not([type="submit"]), textarea').val('');
   }
   // fail function
   function fail_func(data) {
       message.fadeIn().removeClass('alert-success').addClass('alert-success');
       message.text(data.responseText);
       setTimeout(function () {
           message.fadeOut();
       }, 2000);
   }

   form.submit(function (e) {
       e.preventDefault();
       form_data = $(this).serialize();
       $.ajax({
           type: 'POST',
           url: form.attr('action'),
           data: form_data
       })
       .done(done_func)
       .fail(fail_func);
   });

 })(jQuery);
