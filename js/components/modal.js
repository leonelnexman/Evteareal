export class Modal {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            var modal = document.getElementById("myModal");
            var btn = document.getElementById("openModalBtn");
            var span = document.getElementsByClassName("close")[0];
            
            function openModal() {
                modal.classList.add("active");
            }
            
            function closeModal() {
                modal.classList.remove("active");
            }
            
            btn.onclick = function() {
                openModal();
            }
            
            span.onclick = function() {
                closeModal();
            }
            
            window.onclick = function(event) {
                if (event.target == modal) {
                    closeModal();
                }
            }
        });
    }
}