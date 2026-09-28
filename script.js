const statesGrid = document.getElementById("statesGrid");


if (statesGrid) {

    states.forEach((state, index) => {

        const card = document.createElement("div");

        card.className = "state-card";

        card.style.animationDelay = `${index * 0.03}s`;

        card.innerHTML = `

            <div class="state-card-image">

                <img
                    src="${state.image}"
                    alt="${state.name}"
                    onerror="this.src='https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80'"
                >

                <div class="state-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div class="state-symbol">
                    ${state.symbol}
                </div>

            </div>


            <div class="state-card-content">

                <h3>${state.name}</h3>

                <p>${state.description}</p>

                <span class="open-state">
                    OPEN STATE →
                </span>

            </div>

        `;


        card.addEventListener("click", function () {

            localStorage.setItem(
                "selectedState",
                state.name
            );

            window.location.href = "state.html";

        });


        statesGrid.appendChild(card);

    });

}
const stateSearch = document.getElementById("stateSearch");

if (stateSearch && statesGrid) {

    stateSearch.addEventListener("input", function () {

        const query = stateSearch.value.trim().toLowerCase();

        const cards = statesGrid.querySelectorAll(".state-card");

        cards.forEach((card, index) => {

            const name = states[index].name.toLowerCase();

            card.style.display = name.includes(query) ? "" : "none";

        });

    });

}