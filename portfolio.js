function toggleTheme() {
      const body = document.body;
      if (body.style.background.includes('2C3E50')) {
        body.style.background = 'linear-gradient(135deg, #f5f7fa, #c3cfe2)';
        body.style.color = '#000';
      } else {
        body.style.background = 'linear-gradient(135deg, #2C3E50, #FD746C)';
        body.style.color = '#fff';
      }
    }