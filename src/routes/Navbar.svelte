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
            <button class="order-now">Objednat nyní</button>
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
        padding: 8px;
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
                        font-size: 1.2rem;
                        border: 0;
                    }
                }
                .order-now {
                    background-color: #33bbff;
                    color: white;
                    border: #1c6285 solid 1px;
                    font-size: 1.2rem;
                    border-radius: 10px;
                    padding: 8px;
                    white-space: nowrap;
                }
            }
        }
    }
</style>
