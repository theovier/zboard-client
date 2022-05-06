<template>
	<div class="flex w-full py-6">
		<div class="w-1/3">
			<div class="relative mb-2">
				<div
					class="mx-auto flex h-10 w-10 items-center rounded-full bg-orange-500 text-lg text-white"
				>
					<lock-closed-icon class="m-auto h-6 w-6" />
				</div>
			</div>
			<div class="text-center text-xs font-medium md:text-base">
				Account
			</div>
		</div>

		<div class="w-1/3">
			<div class="relative mb-2">
				<div
					class="align-center absolute flex content-center items-center align-middle"
					style="
						width: calc(100% - 2.5rem - 1rem);
						top: 50%;
						transform: translate(-50%, -50%);
					"
				>
					<div
						class="align-center w-full flex-1 items-center rounded bg-gray-200 align-middle"
					>
						<div
							class="w-0 rounded bg-orange-400 py-1"
							style="width: 100%"
						></div>
					</div>
				</div>

				<div
					class="mx-auto flex h-10 w-10 items-center rounded-full bg-orange-500 text-lg text-white"
				>
					<user-icon class="m-auto h-6 w-6" />
				</div>
			</div>

			<div class="text-center text-xs font-bold md:text-base">
				Personal
			</div>
		</div>

		<div class="w-1/3">
			<div class="relative mb-2">
				<div
					class="align-center absolute flex content-center items-center align-middle"
					style="
						width: calc(100% - 2.5rem - 1rem);
						top: 50%;
						transform: translate(-50%, -50%);
					"
				>
					<div
						class="align-center w-full flex-1 items-center rounded bg-gray-200 align-middle"
					>
						<div
							class="w-0 rounded bg-orange-300 py-1"
							style="width: 0%"
						/>
					</div>
				</div>

				<div
					class="mx-auto flex h-10 w-10 items-center rounded-full border-2 border-gray-200 bg-white text-lg text-white"
				>
					<check-circle-icon class="m-auto h-6 w-6 text-gray-500" />
				</div>
			</div>

			<div class="text-center text-xs font-medium md:text-base">
				Finished
			</div>
		</div>
	</div>
</template>

<script>
import { LockClosedIcon } from "@heroicons/vue/solid";
import { UserIcon } from "@heroicons/vue/solid";
import { CheckCircleIcon } from "@heroicons/vue/outline";

export default {
	name: "WizardStepsBar",
	components: {
		LockClosedIcon,
		UserIcon,
		CheckCircleIcon,
	},
};
</script>
