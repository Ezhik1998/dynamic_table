<template>
	<table>
		<thead>
			<tr>
				<th v-for="(field, index) in fields" 
				:key="`f${index}`"
				@click="setSortOrder(fields[index])"
				:class="sortParam === fields[index] ? (order ? 'sortAsc' : 'sortDesc') : '' " >
					{{ field }}
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(row, index) in rows" :key="`r${index}`">
				<td v-for="(item, key) in row" 
				:key="`d${key}`"
				contenteditable="true"
            	@input="event => onInput(event)"
            	@blur="onSave(index, key)">
					<span v-html="replaceText(item.toString())" />
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
	name: 'Table',

	data: () => ({
		editedCell: ''
	}),

	computed: {
		...mapState(['searchText', 'order', 'sortParam', 'curPage', 'perPage']),
		...mapGetters(['fields', 'rows', 'filteredData']),
	},

	methods: {
		// для подсветки при поиске
		replaceText(text) {
			return text.replace(
				new RegExp('(' + this.searchText + ')', 'gim'),
					'<i>$1</i>',
			);
		},

		setSortOrder(col){
			this.$store.dispatch('setOrder', col)
		},

		onInput(event) {
			console.log("--------------------------------------------");
			console.log("reading input data");
			this.editedCell = event.target.innerText.trim()
			console.log("New text in cell " + this.editedCell);
		},

		onSave(index, key) {
			console.log("////////////////////////////////////////////");
			let allTableIndex = this.curPage * this.perPage - (this.perPage - index);
			console.log("Index of cell in full table " + allTableIndex);
			this.filteredData[allTableIndex][key] =
			this.editedCell.length !== 0
				? this.editedCell
				: this.filteredData[allTableIndex][key]
			console.log('Saving text ' + this.filteredData[allTableIndex][key])
			this.editedCell = ''
		}
	},	
};


	// if (this.$store.state.data[index][key] !== this.editedCell && this.editedCell !==''){
    //       this.$store.state.data[index][key] = this.editedCell
    //       this.editedCell = ''
    //   }
</script>



<style lang="scss">
	table {
		border-collapse: collapse;
		width: 100%;
		margin-bottom: 5px;
	}

	tbody tr:nth-child(odd) {
		background-color: #f9f9f9;
	}

	th {
		text-align: left;
		border: 1px solid #ddd;
		border-bottom: 3px solid #ddd;
		font-family: 'Glyphicons Halflings';
		position: relative;
		cursor: pointer;
	}

	th::after {
		content: '';
		position: absolute;
		top: 12px;
		right: 8px;
		display: block;
		opacity: 0.2;
		font-size: 0.7em;
	}

	th.sortAsc::after {
		content: '\25b2';
		opacity: 0.8;
	}

	th.sortDesc::after {
		content: '\25bc';
		opacity: 0.8;
	}

	td {
		border: 1px solid #ddd;
	}

	td,
	th {
		padding: 8px;
	}

	i {
		display: inline-block;
		font-style: normal;
		background-color: yellow;
	}
</style>
