"use strict";

document.addEventListener('DOMContentLoaded', modals);
document.addEventListener('DOMContentLoaded', forms); // Modals

function modals() {
  var rootEl = document.documentElement;
  var $modals = document.querySelectorAll('.modal');
  var $modalButtons = document.querySelectorAll('.modal-button');
  var $modalCloses = document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

  if ($modalButtons.length > 0) {
    $modalButtons.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        openModal(target);
      });
    });
  }

  if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
      $el.addEventListener('click', function () {
        closeModals();
      });
    });
  }

  function openModal(target) {
    var $target = document.getElementById(target);
    rootEl.classList.add('is-clipped');
    $target.classList.add('is-active');
  }

  function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }

  document.addEventListener('keydown', function (event) {
    var e = event || window.event;

    if (e.keyCode === 27) {
      closeModals();
      closeDropdowns();
    }
  });
} // Forms


function forms() {
  var nameField = document.getElementById('name-field');

  nameField.onchange = function () {
    if (nameField.value) {
      nameField.classList.add('is-success');
    } else {
      nameField.classList.add('is-danger');
    }
  }; // Control display of optional fields


  var eRadioYes = document.getElementById('emergency-yes');
  var eRadioNo = document.getElementById('emergency-no');
  var assistField = document.getElementById('medical-assist-field');

  eRadioYes.onclick = function () {
    assistField.classList.remove('is-hidden');
  };

  eRadioNo.onclick = function () {
    assistField.classList.add('is-hidden');
  };
}

;