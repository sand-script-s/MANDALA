
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize all secrets to their collapsed text
    document.querySelectorAll('.secret-link').forEach(el => {
      const collapsed = el.getAttribute('data-collapsed-text') || '**';
      el.innerHTML = collapsed;
    });

    // Event delegation: handle clicks on any .secret (even after HTML changes)
    document.addEventListener('click', (event) => {
      const el = event.target.closest('.secret-link');
      if (!el) return; // click was not on a .secret element

      const collapsed = el.getAttribute('data-collapsed-text') || '**';
      const expanded = el.getAttribute('data-expanded-html') || '* secret unlocked *';

      // Use innerHTML so links work
      if (el.innerHTML.trim() === collapsed) {
        el.innerHTML = expanded;   // expand to HTML with <a>
      } else {
        el.innerHTML = collapsed;  // collapse back to **
      }
    });
  });

