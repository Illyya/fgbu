<template>
  <div class="content-show">
    <h1 class="content-show__titile-1 title-1">{{ h1 }}</h1>
    <h2 class="content-show__titile-2 title-2">{{ h2 }}</h2>
    <table class="content-show__table table">
      <tr class="table__tr">
        <th
          v-for="(th, index) in ColsTitles"
          :key="index"
          @click="sortCols(index)"
          class="table__th"
        >
          {{ th }}
        </th>
      </tr>
      <tr 
        v-for="row in Data" 
        :key="row.id" 
        class="table__tr">
        <td
          v-for="(td, index) in row"
          :key="index"
          @click="editingLines"
          class="table__td"
        >
          <input 
            class="table__input" 
            type="text" 
            :value="td" 
            disabled />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "processedData",
  props: ["h1", "h2", "ColsTitles", "Data"],
  data() {
    return {
      even: 0,
    };
  },
  methods: {
    editingLines(e) {
      if (e.target.disabled === true) {
        e.target.disabled = false;
      }
    },
    sortCols(index) {
      this.even++;
      let q = this.$store.state.data.Data.sort(function (a, b) {
        let dateA = new Date(a.date),
            dateB = new Date(b.date),
            date_arrivalA = new Date(a.date_arrival),
            date_arrivalB = new Date(b.date_arrival),
            timestampA = new Date(a.timestamp),
            timestampB = new Date(b.timestamp),
            datetimeA = new Date(a.datetime),
            datetimeB = new Date(b.datetime);
        if (a[index] == a.date) {
          return dateB - dateA;
        }
        if (a[index] == a.date_arrival) {
          return date_arrivalB - date_arrivalA;
        }
        if (a[index] == a.timestamp) {
          return timestampB - timestampA;
        }
        if (a[index] == a.datetime) {
          return datetimeB - datetimeA;
        } else {
          return b[index] - a[index];
        }
      });

      this.Data = q;

      if (this.even % 2 == 0) {
        this.Data = q.reverse();
      }
    },
  },
};
</script>

<style scoped lang="scss">

.content-show {
  align-self: flex-start;
  display: flex;
  flex-direction: column;  

  &__table {
    align-self: flex-start;
  }
}

.table {
  border-collapse: collapse;

  &__th {
    padding: 5px 10px;
    border: 1px solid #6a80fd;
    cursor: pointer;
    transition: 0.2s ease;
    &:hover {
      background-color: aqua;
    }
  }

  &__td {
    border: 1px solid #6a80fd;
    background-color: rgb(237, 253, 253);
  }
  &__input {
    padding: 5px 10px;
    border: none;
    &:hover {
      background-color: rgb(255, 255, 255);
    }
    &:focus {
      outline: 1px solid rgb(255, 60, 0);
    }
  }
}
</style>
