<template>
  <div class="q-pa-md">
    <q-table title="Metadata" :rows="rows" :columns="columns" row-key="name" />
  </div>
</template>

<script setup lang="ts">
import type { QTableProps } from 'quasar';
import { onMounted, ref } from 'vue';

const columns: QTableProps['columns'] = [
  {
    name: 'index',
    label: 'Index',
    field: 'index',
    align: 'center',
  },
  { name: 'group', align: 'center', label: 'Group', field: 'calories', sortable: true },
];

const seed = ref([
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%',
  },
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%',
  },
]);

let rows = seed?.value.map((row, index) => ({ ...row, index: index + 1 }));

onMounted(() => {
  console.log('mount');
});
</script>

<style>
.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>
