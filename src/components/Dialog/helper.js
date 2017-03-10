import util from '../../utils/utils.js'
const { width } = util.dimension()

const Help = {
	getWidth() {
		return width > 330 ? 320 : 280
	}
}

export default Help