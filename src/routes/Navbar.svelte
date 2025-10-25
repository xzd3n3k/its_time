<script lang="ts">
import {goto} from "$app/navigation";
import { slide } from 'svelte/transition'
import AnimatedHamburger from "../AnimatedHamburger.svelte";
import {cubicOut} from "svelte/easing";
import { onMount } from 'svelte';
import Dialog from "../Dialog.svelte";

export let open = false
export let onClick = (): void => {
    open = !open
}
let isMobile = false;
let dialog: HTMLDialogElement;

onMount(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');

    isMobile = mediaQuery.matches;

    const handler = (e: MediaQueryListEvent) => {
        isMobile = e.matches;
    };
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
});

function openModal() {
    onClick();

    // wait until navbar closing animation is completed
    requestAnimationFrame(() => {
        dialog.showModal();
    });
}

</script>
<a class="logo-mobile-version" href="/">
    <img
            src="/logo_zakladni.svg"
            width="62"
            height="60"
            alt="logo"
    />
</a>
<AnimatedHamburger customClass="mobile-menu-toggle-button" width="48" {open} {onClick} />
{#if open || !isMobile}
    <nav class="navigation-container" transition:slide="{{ duration: 400, easing: cubicOut }}">
        <div class="title">
            <a class="logo-wrapper-anchor" href="/">
                <img
                    src="/logo_zakladni.svg"
                    width="125"
                    height="120"
                    alt="logo"
                />
            </a>
        </div>
        <div class="buttons-container">
            <div class="buttons">
                <div class="nav-buttons">
                    <a class="nav-button" href="/services" on:click={onClick}>Služby</a>
                    <a class="nav-button" href="/contacts" on:click={onClick}>Kontakty</a>
                </div>
                <button class="button-outline" on:click={openModal}>Objednat nyní</button>
            </div>
        </div>
    </nav>
{/if}

<Dialog bind:dialog>
    <div class="contact-form">
        <h3 class="title">Napiště nám</h3>
        <span class="subtitle">Vyplň formulář a my se Vám ozveme hned jak to bude možné</span>
        <input type="text" autofocus placeholder="Jméno">
        <input type="email" placeholder="Email">
        <input type="tel" placeholder="Mobil">
        <textarea placeholder="Napiště něco o svém vozidle a potřebných službách"></textarea>
        <button class="button-primary">
            Poptat služby
        </button>
    </div>
</Dialog>

<style lang="scss">
  .contact-form {
    flex: 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-image: linear-gradient(180deg, hsl(220 18% 12%) 0%, hsl(220 20% 10%) 100%);

    textarea {
      min-height: 120px;
    }

    .title {
      color: var(--color-text-primary);
    }

    .subtitle {
      color: var(--color-text-secondary);
    }
  }
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

            .logo-wrapper-anchor {
                display: inline-flex;
            }
            img {
                background-color: rgba(0, 63, 145, 0.158);
                border-radius: 10%;
                padding: 8px;
                transition: filter 0.3s;
                &:hover {
                    filter: brightness(140%);
                    cursor: pointer;
                }
            }
        }

        .buttons-container {
            flex: 0;
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
                        text-decoration: none;
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
                    }
                }
            }
        }
    }

    .logo-mobile-version {
        display: none !important;
        z-index: 50 !important;
        position: absolute !important;
        left: 15px !important;
        top: 15px !important;
    }

    @media only screen and (max-width: 1024px) {

      .logo-mobile-version {
        display: inline-block !important;
      }

      .mobile-menu-toggle-button {
        display: inline-block !important;
      }
      nav {
        position: absolute;
        width: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
        background: linear-gradient(135deg, var(--color-primary) 30%, var(--color-secondary) 100%);
        height: 100%;
        z-index: 100;
        justify-content: center;

        .title {
          display: none;
        }

        .buttons {
          flex-direction: column;

          .nav-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      }
    }
</style>
