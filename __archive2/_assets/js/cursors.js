(() => {
  const folders = ['pixel-black', 'scribble', 'scribble-white', 'mixed-color'];
  const basePath = '/cursors/';
  const cursorFiles = ['arrow.cur', 'text.cur', 'hand.cur'];
  const cursorSelect = document.getElementById('cursorSelect');
  const menu = document.getElementById('cursorMenu');
  folders.forEach(folder => {
    const option = document.createElement('option');
    option.value = folder;
    option.textContent = folder.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    cursorSelect.appendChild(option);
  });
  function replaceCursorFolder(cursorValue, newFolder) {
    const regex = /url\(['"]?\/cursors\/([^\/]+)\/([^'")]+)['"]?\)/g;

    return cursorValue.replace(regex, (match, folder, file) => {
      if (folders.includes(folder) && cursorFiles.includes(file)) {
        if (folder !== newFolder) {
          return `url('${basePath}${newFolder}/${file}')`;
        }
      }
      return match;
    });
  }
  function updateInlineStyles(newFolder) {
    document.querySelectorAll('*').forEach(el => {
      if (!el.style) return;
      let cursorVal = el.style.cursor;
      if (!cursorVal) return;

      const newCursorVal = replaceCursorFolder(cursorVal, newFolder);
      if (newCursorVal && newCursorVal !== cursorVal) {
        el.style.cursor = newCursorVal;
      }
    });
  }
  function updateStylesheets(newFolder) {
    for (const sheet of document.styleSheets) {
      let rules;
      try {
        rules = sheet.cssRules;
      } catch (e) {
        continue;
      }
      if (!rules) continue;

      for (const rule of rules) {
        if (rule.style && rule.style.cursor) {
          const oldCursor = rule.style.cursor;
          const newCursor = replaceCursorFolder(oldCursor, newFolder);
          if (newCursor && newCursor !== oldCursor) {
            rule.style.cursor = newCursor;
          }
        }
      }
    }
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === '0') {
      e.preventDefault();
      if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    }
  });
  cursorSelect.addEventListener('change', () => {
    const newFolder = cursorSelect.value;
    updateInlineStyles(newFolder);
    updateStylesheets(newFolder);
  });
  cursorSelect.value = folders[0];
  menu.style.display = 'none';
})();