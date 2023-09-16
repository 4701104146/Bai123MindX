
        function generateColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            
            document.body.style.backgroundColor = color;
            document.getElementById('colorResult').innerHTML = color;
            document.getElementById('gradientBox').style.backgroundImage = "linear-gradient(to right, " + color + ", #FFFF00)";
        }
        
        function copyToClipboard() {
            var colorText = document.getElementById('colorResult');
            var tempInput = document.createElement('input');
            
            document.body.appendChild(tempInput);
            tempInput.value = colorText.innerHTML;
            tempInput.select();
            tempInput.setSelectionRange(0, 99999);
            
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            
            alert("Mã màu đã được copy: " + colorText.innerHTML);
        }