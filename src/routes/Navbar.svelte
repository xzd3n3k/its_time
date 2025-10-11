<script lang="ts">
</script>

<nav class="navigation-container">
    <div class="title">
        <img
            src="/src/lib/assets/logo_brighter.svg"
            width="250rem"
            height="240rem"
            alt="logo"
        />
    </div>
    <div class="buttons-container">
        <div class="buttons">
            <div class="nav-buttons">
                <button class="nav-button">Služby</button>
                <button class="nav-button">Galerie</button>
                <button class="nav-button">Kontakty</button>
            </div>
            <button class="button-primary">Objednat nyní</button>
        </div>
    </div>
</nav>

<style lang="scss">
    .navigation-container {
        display: flex;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        padding: 16px 32px;
        .title {
            flex: 4;
            font-weight: bold;
            align-self: center;
            img {
                background-color: rgba(0, 63, 145, 0.158);
                border-radius: 10%;
                padding: 16px;
                padding-top: 0;
            }
        }

        .buttons-container {
            flex: 2;
            .buttons {
                display: flex;
                height: fit-content;
                background-color: rgba(0, 63, 145, 0.158);
                border-radius: 10px;
                padding: 16px;
                gap: 8px;
                .nav-buttons {
                    display: flex;
                    justify-content: space-evenly;
                    flex: 1;
                    gap: 8px;
                    .nav-button {
                        background-color: transparent;
                        color: white;
                        font-size: 1rem;
                        font-weight: bold;
                        border: 0;
                        font-family: "Titillium Web", sans-serif;
                        padding: 8px 16px;
                        border-radius: 10px;
                        transition:
                            box-shadow 0.3s,
                            color 0.3s,
                            border 0.3s;
                        border: 1px solid transparent;
                    }
                    .nav-button:hover {
                        color: rgb(51, 187, 255);
                        border: 1px solid rgb(51, 187, 255);
                    }
                    .nav-button:focus {
                        color: rgb(51, 187, 255);
                    }
                    .nav-button:active {
                        color: rgb(39, 140, 190);
                        box-shadow:
                            rgba(5, 17, 24, 0.6) 3px 3px 6px 0px inset,
                            rgba(0, 63, 145, 0.158) -3px -3px 6px 1px inset;
                    }
                }
            }
        }
    }
</style>
