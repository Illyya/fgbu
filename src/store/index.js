import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      "PageTemplate": "SimplePage",
      "PageTitle": "Судовые суточные донесения (ССД)",
      "H1Content": "ССД",
      "TableName": "Случайные данные",
      "ColsTitles":
      {
        "id_ves": "ID",
        "date": "Дата",
        "permit": "Разрешение",
        "id_rank": "Категория",
        "id_region": "Регион",
        "id_region_to": "Регион следования",
        "date_arrival": "Дата прибытия",
        "id_information_source": "Источник информации",
        "timestamp": "Дата, время",
        "note": "Примечание",
        "datetime": "Дата, время 2",
        "id_regime": "Код запаса"
      },
      "ColsTypes":
      {
        "id_ves": "NUM",
        "date": "DATE",
        "permit": "STR",
        "id_rank": "NUM",
        "id_region": "NUM",
        "id_region_to": "NUM",
        "date_arrival": "DATE",
        "id_information_source": "NUM",
        "timestamp": "DTIME",
        "note": "TAREA",
        "datetime": "DTIME",
        "id_regime": "NUM"
      },
      "ColsOrder":
      {
        "id_ves": 1,
        "date": 3,
        "permit": 4,
        "id_rank": 2,
        "id_region": 5,
        "id_region_to": 6,
        "date_arrival": 7,
        "id_information_source": 8,
        "timestamp": 10,
        "note": 9,
        "datetime": 11,
        "id_regime": 12
      },
      "ColsShow":
      {
        "id_ves": 1,
        "date": 1,
        "permit": 1,
        "id_rank": 1,
        "id_region": 1,
        "id_region_to": 1,
        "date_arrival": 1,
        "id_information_source": 1,
        "timestamp": 1,
        "note": 1,
        "datetime": 0,
        "id_regime": 1
      },
      "Data":
        [
          {
            "id_ves": 14009,
            "date": "2018-08-16",
            "permit": null,
            "id_rank": 2,
            "id_region": 3132,
            "id_region_to": 1274,
            "date_arrival": "2018-08-18",
            "id_information_source": 112,
            "timestamp": "2018-08-16 19:13:18",
            "note": null,
            "datetime": "2018-08-16 12:00:00",
            "id_regime": 0
          },
          {
            "id_ves": 14009,
            "date": "2018-08-15",
            "permit": null,
            "id_rank": 2,
            "id_region": 3132,
            "id_region_to": 1274,
            "date_arrival": "2018-08-18",
            "id_information_source": 112,
            "timestamp": "2018-08-16 15:24:34",
            "note": null,
            "datetime": "2018-08-15 12:00:00",
            "id_regime": 0
          },
          {
            "id_ves": 14009,
            "date": "2018-08-14",
            "permit": null,
            "id_rank": 2,
            "id_region": 3132,
            "id_region_to": 1274,
            "date_arrival": "2018-08-18",
            "id_information_source": 112,
            "timestamp": "2018-08-16 15:24:35",
            "note": null,
            "datetime": "2018-08-14 12:00:00",
            "id_regime": 0
          },
          {
            "id_ves": 14009,
            "date": "2018-08-13",
            "permit": null,
            "id_rank": 4,
            "id_region": 3132,
            "id_region_to": 0,
            "date_arrival": null,
            "id_information_source": 112,
            "timestamp": "2018-08-16 15:24:32",
            "note": null,
            "datetime": "2018-08-13 12:00:00",
            "id_regime": 0
          },
          {
            "id_ves": 14009,
            "date": "2018-08-12",
            "permit": null,
            "id_rank": 4,
            "id_region": 3132,
            "id_region_to": 0,
            "date_arrival": null,
            "id_information_source": 112,
            "timestamp": "2018-08-16 15:24:31",
            "note": null,
            "datetime": "2018-08-12 12:00:00",
            "id_regime": 0
          },
          {
            "id_ves": 14009,
            "date": "2018-08-11",
            "permit": null,
            "id_rank": 4,
            "id_region": 3132,
            "id_region_to": 0,
            "date_arrival": null,
            "id_information_source": 112,
            "timestamp": "2018-08-16 15:24:30",
            "note": null,
            "datetime": "2018-08-11 12:00:00",
            "id_regime": 0
          },
          {
            "id_ves": 14009,
            "date": "2018-08-10",
            "permit": null,
            "id_rank": 4,
            "id_region": 3132,
            "id_region_to": 0,
            "date_arrival": null,
            "id_information_source": 112,
            "timestamp": "2018-08-16 15:24:29",
            "note": null,
            "datetime": "2018-08-10 12:00:00",
            "id_regime": 0
          },
          {
            "id_ves": 14009,
            "date": "2018-08-09",
            "permit": null,
            "id_rank": 4,
            "id_region": 3132,
            "id_region_to": 0,
            "date_arrival": null,
            "id_information_source": 112,
            "timestamp": "2018-08-16 15:24:28",
            "note": null,
            "datetime": "2018-08-09 12:00:00",
            "id_regime": 0
          },
          {
            "id_ves": 14009,
            "date": "2018-08-08",
            "permit": null,
            "id_rank": 2,
            "id_region": 277,
            "id_region_to": 3132,
            "date_arrival": "2018-08-09",
            "id_information_source": 112,
            "timestamp": "2018-08-16 15:24:27",
            "note": null,
            "datetime": "2018-08-08 12:00:00",
            "id_regime": 0
          },
          {
            "id_ves": 14009,
            "date": "2018-08-07",
            "permit": null,
            "id_rank": 1,
            "id_region": 277,
            "id_region_to": 0,
            "date_arrival": null,
            "id_information_source": 112,
            "timestamp": "2018-08-16 15:24:26",
            "note": null,
            "datetime": "2018-08-07 12:00:00",
            "id_regime": 0
          },
          {
            "id_ves": 14009,
            "date": "2018-08-06",
            "permit": null,
            "id_rank": 3,
            "id_region": 1274,
            "id_region_to": 277,
            "date_arrival": "2018-08-07",
            "id_information_source": 112,
            "timestamp": "2018-08-16 15:24:25",
            "note": null,
            "datetime": "2018-08-06 12:00:00",
            "id_regime": 0
          },
          {
            "id_ves": 14009,
            "date": "2018-08-05",
            "permit": null,
            "id_rank": 3,
            "id_region": 1274,
            "id_region_to": 277,
            "date_arrival": "2018-08-06",
            "id_information_source": 112,
            "timestamp": "2018-08-16 15:24:24",
            "note": null,
            "datetime": "2018-08-05 12:00:00",
            "id_regime": 0
          },
          {
            "id_ves": 14009,
            "date": "2018-08-04",
            "permit": null,
            "id_rank": 3,
            "id_region": 1274,
            "id_region_to": 277,
            "date_arrival": "2018-08-07",
            "id_information_source": 112,
            "timestamp": "2018-08-16 15:24:23",
            "note": null,
            "datetime": "2018-08-04 12:00:00",
            "id_regime": 0
          },
          {
            "id_ves": 14009,
            "date": "2018-08-03",
            "permit": null,
            "id_rank": 3,
            "id_region": 1274,
            "id_region_to": 277,
            "date_arrival": "2018-08-06",
            "id_information_source": 112,
            "timestamp": "2018-08-16 15:24:22",
            "note": null,
            "datetime": "2018-08-03 12:00:00",
            "id_regime": 0
          },
          {
            "id_ves": 14009,
            "date": "2018-08-02",
            "permit": null,
            "id_rank": 3,
            "id_region": 1274,
            "id_region_to": 277,
            "date_arrival": "2018-08-06",
            "id_information_source": 112,
            "timestamp": "2018-08-16 15:24:21",
            "note": null,
            "datetime": "2018-08-02 12:00:00",
            "id_regime": 0
          },
          {
            "id_ves": 14009,
            "date": "2018-08-01",
            "permit": null,
            "id_rank": 4,
            "id_region": 1274,
            "id_region_to": 0,
            "date_arrival": null,
            "id_information_source": 112,
            "timestamp": "2018-08-16 15:24:21",
            "note": null,
            "datetime": "2018-08-01 12:00:00",
            "id_regime": 0
          },
          {
            "id_ves": 30385,
            "date": "2018-06-27",
            "permit": null,
            "id_rank": 4,
            "id_region": 3337,
            "id_region_to": 0,
            "date_arrival": null,
            "id_information_source": 112,
            "timestamp": "2018-06-28 11:23:37",
            "note": null,
            "datetime": "2018-06-27 12:00:00",
            "id_regime": 0
          }
        ]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
