<template>
  <table v-el:data-table :class="tableClass" @mousemove="onDrag" @touchmove="onDrag" @mouseup="stopDrag" @touchend="stopDrag" @mouseleave="stopDrag">
    <template v-if="colResizable">
      <col v-for="col in cols"  track-by="$index" :style="col"/>
    </template>
    <thead>
      <tr class="slds-text-heading--label">
        <th v-for="value in columnInfo" :class="tableHeaderClass" scope="col" v-on:click.prevent="sortBy($key)">
          <span v-if="sortable">
            <slds-icon icon="down" theme="default" size="x-small"></slds-icon>
          </span>
          <span v-if="!value.display">
            {{ $key }}
          </span>
          <span v-else>
            {{ value.display | capitalize }}
          </span>
          <div v-if="colResizable" class="slds-resizable">
            <label class="slds-assistive-text">click and drag to resize</label>
            <input class="slds-resizable__input slds-assistive-text" type="range" min="20" max="1000"/>
            <span class="slds-resizable__handle"  @mousedown="startDrag($index)" @touchstart="startDrag($index)"></span>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-on:click.prevent="expand(row)" v-for="row in tableData | filterBy lookupText | orderBy sortKey sortDirection" class="slds-hint-parent">
        <td :class="{ 'slds-cell-wrap': !row.truncated, 'slds-truncate': row.truncated }" v-for="element in columnInfo">
          <span v-if="!element.format">
            {{ getValue(row, $key) }}
          </span>
          <span v-else>
            {{{ element.format(getValue(row, $key)) }}}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
/* global event */
import _ from 'lodash'
export default {
  props: {
    bordered: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    colResizable: {
      type: Boolean,
      default: false,
    },
    buffered: {
      type: Boolean,
      default: false,
    },
    truncate: {
      type: Boolean,
      default: false,
    },
    sortable: {
      type: Boolean,
      default: false,
    },
    lookupText: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default: [],
      required: true,
    },
    columnInfo: {
      type: Object,
      default: {},
    },
  },

  ready () {
    if (this.sortable) {
      Object.keys(this.columnInfo).forEach((key) => { // sorting
        this.$set(`sortOrders.${key}`, 1)
      })
    }
    if (this.truncate) {
      Object.keys(this.columnInfo).forEach((key, i) => {
        this.$set(`colWidths[${i}]`, 0)
      })
    }
  },

  computed: {
    tableClass () {
      let className = 'slds-table'
      if (this.bordered) { className += ' slds-table--bordered' }
      if (this.striped) { className += ' slds-table--striped' }
      if (this.colResizable) { className += ' slds-table--fixed-layout' }
      if (this.buffered) { className += ' slds-table--cell-buffer' }
      return className
    },
    tableHeaderClass () {
      let className = ''
      if (this.colResizable) { className += ' slds-is-resizable' }
      if (this.sortable) { className += ' slds-is-sortable' }
      return className
    },
    tableData () {
      return this.data.map((row, index) => {
        this.$set(`data[${index}].truncated`, this.truncate)
        return row
      })
    },
    sortDirection () {
      return _.get(this.sortOrders, this.sortKey)
    },
  },

  data () {
    return {
      sortKey: '', // sorting
      sortOrders: {}, // sorting
      colWidths: [], // resizable columns
      cols: [], // resizable columns
      draggedColumn: -1, // resizable columns
      isBeingDragged: false, // resizable columns
    }
  },

  methods: { // TODO: This is not updating correctly
    sortBy (key) {
      if (this.sortable) {
        this.sortKey = key
        this.$set(`sortOrders.${key}`, _.get(this.sortOrders, key) * -1)
      }
    },

    startDrag (key) {
      if (this.colResizable) {
        this.isBeingDragged = true
        this.draggedColumn = key
        let cells = this.$els.dataTable.rows[0].cells

        let sum = 0
        this.colWidths.forEach((element, i) => {
          sum += cells[i].scrollWidth
          this.colWidths[i] = sum
        })
      }
    },

    onDrag () {
      if (this.isBeingDragged) {
        let totalWidth = window.innerWidth || document.body.clientWidth
        this.colWidths[this.draggedColumn] = this.getMouseX()
        let previous = 0
        let balancedWidth = this.colWidths.map((element, i) => {
          let result = element - previous
          previous = element
          return result
        })

        balancedWidth.forEach((width, i) => {
          this.cols.$set(i, `width:${width * 100 / totalWidth}%`)
        })
      }
    },

    stopDrag () {
      this.isBeingDragged = false
      this.draggedColumn = -1
    },

    getMouseX () {
      let eventDoc, doc, body
      let evnt = event || window.event // IE-ism

      if (evnt.pageX == null && evnt.clientX != null) {
        eventDoc = (evnt.target && evnt.target.ownerDocument) || document
        doc = eventDoc.documentElement
        body = eventDoc.body

        evnt.pageX = evnt.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
          (doc && doc.clientLeft || body && body.clientLeft || 0)
      }
      return evnt.pageX
    },

    getValue (row, key) {
      return _.get(row, key)
    },

    expand (row) {
      if (this.truncate) {
        row.truncated = !row.truncated
      }
    },
  },
}
</script>

<style>
  thead tr th {
      height: 30px;
      line-height: 30px;
  }

  tbody {
    border-top: 2px solid black;
  }

  tbody td, thead th {
      border-right: 1px solid black;
      white-space: nowrap;
  }

  tbody td:last-child, thead th:last-child {
      border-right: none;
  }
</style>
