
        var btSim = document.getElementById("btSim")
        var btNao = document.getElementById("btNao")
        var outSim = document.getElementById("outSim")



        btSim.addEventListener("click", () => {
            btNao.className = "oculta"
            btSim.className = "oculta"
            outSim.className = "exibe"

        })



        btNao.addEventListener("mouseover", apagar)

        function apagar() {
            var posiçãoX = Math.floor(Math.random() * 501)
            var posiçãoY = Math.floor(Math.random() * 501)


            console.log(posiçãoX)
            console.log(posiçãoY)

            btNao.style.top = posiçãoX + "px"
            btNao.style.right = posiçãoY + "px"



        }


