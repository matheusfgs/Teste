document.getElementById('rating').addEventListener('input', function() {
    document.getElementById('ratingValue').textContent = this.value;
});

function submitRating() {
    const sodaName = document.getElementById('sodaName').value;
    const rating = document.getElementById('rating').value;
    const resultDiv = document.getElementById('result');
    
    if (sodaName.trim() === "") {
        resultDiv.innerHTML = `<p>Por favor, nos diga sua experiência (se quiser, coloque sugestões).</p>`;
    } else {
        resultDiv.innerHTML = `<p>Você deu uma classificação de ${rating} para o nosso site. "${sodaName}"</p>`;
        
    }
}

function voltarAoInicio() {
  
    window.location.href = "../index.html";
  }
