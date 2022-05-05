<template>
    <container extra-classes="flex flex-col justify-center">

        <div class="mt-2">
<!--            <img class="hidden sm:block mx-auto h-16 w-auto" src="@/assets/logo/logo.svg" alt="uc4_logo" />-->
            <h2 class="mt-6 text-center text-4xl font-medium text-gray-700 tracking-tighter">Z-Board</h2>
        </div>
        <div
            class=" relative mt-4 flex justify-center items-center"
            :class="{'invisible' : !hasError}"
        >
            <span
                class="max-w-sm w-full flex justify-between items-center text-sm tracking-wide py-3.5 px-6 rounded-md align-middle text-gray-800 bg-red-100 border border-red-400"
            >
                {{ errorText }}
                 <font-awesome-icon icon="xmark" class="cursor-pointer text-red-400" @click="resetError" />
            </span>
        </div>
        <div class="flex justify-center">
            <div
                class="max-w-sm w-full mt-6 bg-gray-50 border border-gray-200 sm:px-6 py-6 p-4 rounded-lg shadow-lg relative"
            >
                <div class="rounded-md shadow-sm">
                    <div class="">
                        <label class="input-label">Email</label>
                        <input
                            id="email"
                            v-model="email"
                            autofocus
                            type="text"
                            :class="{'error' : hasError}"
                            class="w-full input-text"
                            @input="resetError"
                        />
                    </div>
                    <div class="mt-6 relative">
                        <label class="input-label">Password</label>
                        <i
                            :class="[isPasswordVisible() ? 'fa-eye-slash' : 'fa-eye']"
                            class="fas absolute z-20 mt-2.5 mr-4 right-0 text-gray-500 cursor-pointer"
                            @click="togglePassword"
                        />
                        <input
                            id="password"
                            v-model="password"
                            :type="passwordFieldType"
                            :class="{'error' : hasError}"
                            class="w-full input-text"
                            @input="resetError"
                        />
                    </div>
                </div>

                <div class="mt-8">
                    <button id="login" class="w-full btn" :disabled="hasNoInputEntered" @click="login">Login</button>
                </div>
            </div>
        </div>
    </container>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import Container from "@/views/Container.vue";

const email = ref("");
const password = ref("");
const passwordFieldType = ref("password");
const hasError = ref(true);
const errorText = ref("Incorrect username or password.");
const hasNoInputEntered = computed(() => email.value === "" || password.value === "");

function togglePassword() {
    passwordFieldType.value = isPasswordVisible() ? "password" : "text";
}
function isPasswordVisible() {
    return passwordFieldType.value === "text";
}

function login() {

}

function resetError() {
    hasError.value = false;
}

</script>