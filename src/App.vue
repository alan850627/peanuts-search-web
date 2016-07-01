<template>
  <div class="mainFrame">
    <slds-page-header :lookup-text.sync="lookupText"></slds-page-header>
    <slds-table :truncate="true" :col-resizable="true" :sortable="true" :lookup-text="lookupText" :bordered="true" :buffered="true" :data="data" :column-info="columnInfo"></slds-table>
  </div>
</template>

<script>
  import Commitment from 'src/models/Commitment'
  import formatDate from 'src/components/common/filters/format-date'

  export default {
    data () {
      return {
        lookupText: '',
        data: [],
        columnInfo: {
          'customerDisplay': {display: 'Customer', format: (val) => val},
          'owner.name': {display: 'Created By', format: (val) => val},
          'createdDate': {display: 'Created Date', format: formatDate},
          'dueDate': {display: 'Due Date', format: formatDate},
          'details': {display: 'Details', format: (val) => val},
        },
      }
    },

    ready () {
      this.getData()
    },

    methods: {
      getData () {
        Commitment.query().parent('owner').then((data) => {
          this.data = data
        })
      },
    },
  }
</script>
