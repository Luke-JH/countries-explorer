<template>
  <div class="flex min-h-screen items-center justify-center bg-atlas-surface p-6 dark:bg-atlas-surface-dark">
    <ClientOnly>
      <LMap
        :zoom="6"
        :center="[47.21322, -1.559482]"
        :use-global-leaflet="false"
        class="mx-auto !h-[350px] !w-[500px]"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          layer-type="base"
          name="OpenStreetMap"
        />
      </LMap>
    </ClientOnly>
  </div>
</template>
