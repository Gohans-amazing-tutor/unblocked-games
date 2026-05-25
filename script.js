function openGame(gameName) {
    switch(gameName) {
        case 'snake':
            window.location.href = 'games/snake.html';
            break;
        case 'tetris':
            window.location.href = 'games/tetris.html';
            break;
        case 'pong':
            window.location.href = 'games/pong.html';
            break;
        case 'minesweeper':
            window.location.href = 'games/minesweeper.html';
            break;
        case '2048':
            window.location.href = 'games/2048.html';
            break;
        case 'memory':
            window.location.href = 'games/memory.html';
            break;
        default:
            alert('Game coming soon!');
    }
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.history.back();
    }
});
