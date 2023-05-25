document.addEventListener('DOMContentLoaded', function (){
        document.getElementById('form-aleat').addEventListener('submit', function (e){
            e.preventDefault();
            let maxNumber = document.getElementById('max-number').value;
            maxNumber = parseInt(maxNumber);

            let aleatNumber = Math.random() * maxNumber;
            aleatNumber = Math.floor(aleatNumber +1);
            

            document.getElementById('result-value').innerText = aleatNumber;
            document.querySelector('.result').style.display = 'block';
        })
})