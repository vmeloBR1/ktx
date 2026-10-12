document.addEventListener('DOMContentLoaded', function() {
    // Altera o título da aba/página
    document.title = "500 Internal Server Error";

    // Substitui todo o conteúdo HTML do documento por um layout clássico de erro 500
    document.documentElement.innerHTML = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>500 Internal Server Error</title>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                    background-color: #ffffff;
                    color: #222222;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    margin: 0;
                    text-align: center;
                }
                h1 {
                    font-size: 2.5rem;
                    margin-bottom: 10px;
                    font-weight: 500;
                }
                p {
                    font-size: 1rem;
                    color: #555555;
                    max-width: 500px;
                    line-height: 1.5;
                    margin: 0;
                }
            </style>
        </head>
        <body>
            <h1>Internal Server Error</h1>
            <p>The server encountered an internal error or misconfiguration and was unable to complete your request.</p>
        </body>
        </html>
    `;
});
