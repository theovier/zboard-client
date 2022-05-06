<template>
    <container>
        <div class="mt-24">
            <img class="hidden sm:block mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
            <h1 class="mt-6 text-center text-3xl font-extrabold text-gray-900 tracking-tighter">Z-Board</h1>
            <h2 class="mt-2 text-center text-lg  text-gray-600 tracking-tighter">Stay Connected</h2>
        </div>
        <div
            class=" relative mt-6 mb-4 flex justify-center items-center"
            :class="{'invisible' : !hasError}"
        >
            <span
                class="max-w-md w-full flex justify-between items-center text-sm tracking-wide py-3.5 px-6 rounded-md align-middle text-gray-800 bg-red-100 border border-red-400"
            >
                {{ errorText }}
                 <font-awesome-icon
                     icon="xmark"
                     class="ml-2 cursor-pointer text-red-400"
                     size="lg"
                     @click="resetError"
                 />
            </span>
        </div>
        <div class="flex justify-center">
            <div
                class="max-w-md w-full bg-gray-50 border border-gray-200 sm:px-10 py-8 p-4 rounded-lg shadow-lg relative"
            >
                <div class="rounded-md shadow-sm">
                    <div class="">
                        <label class="input-label">Email</label>
                        <input
                            id="email"
                            v-model="email"
                            autofocus
                            type="text"
                            :class="{'input-error' : hasError}"
                            class="w-full input-text"
                            @input="resetError"
                        />
                    </div>
                    <div class="mt-6 relative">
                        <label class="input-label">Password</label>

                        <font-awesome-icon
                            v-if="isPasswordVisible"
                            icon="eye-slash"
                            class="fas absolute z-20 mt-3.5 mr-4 right-0 text-gray-500 cursor-pointer"
                            @click="togglePassword"
                        />

                        <font-awesome-icon
                            v-else
                            icon="eye"
                            class="fas absolute z-20 mt-3.5 mr-4 right-0 text-gray-500 cursor-pointer"
                            @click="togglePassword"
                        />

                        <input
                            id="password"
                            v-model="password"
                            :type="passwordFieldType"
                            :class="{'input-error' : hasError}"
                            class="w-full input-text"
                            @input="resetError"
                        />
                    </div>
                </div>

                <div class="mt-8">
                    <button id="login" class="btn w-full" :disabled="hasNoInputEntered" @click="login">Login</button>
                </div>
            </div>
        </div>
    </container>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import Container from "@/views/Container.vue";
import router from "../../router";
import { onMounted } from "vue";
import { useAuthStore } from "../../store";

onMounted(() => {
    //store.isLoggedIn().then(() => router.push({ name: "playground" }));
});

const store = useAuthStore();
const email = ref("");
const password = ref("");
const passwordFieldType = ref("password");
const hasError = ref(true);
const errorText = ref("You have entered an invalid email or password.");

const hasNoInputEntered = computed(() => {
    return email.value === "" || password.value === "";
});

const isPasswordVisible = computed(() => {
    return passwordFieldType.value === "text";
})

function togglePassword() {
    passwordFieldType.value = isPasswordVisible.value ? "password" : "text";
}

function resetError() {
    hasError.value = false;
}

function login() {
    store
        .login("admin@example.com", "password")
        .then(() => router.push({ name: "playground" }));
}

</script>