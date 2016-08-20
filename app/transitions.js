export default function(){
	this.transition(
		this.fromRoute('index'),
		this.toRoute('cyto'),
		this.use('toLeft'),
		this.reverse('toRight')
		// this.useAndReverse('fade')

	);
}
