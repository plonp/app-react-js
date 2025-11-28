const styleA = {minWidth: '24rem', backgroundColor: '#242424', padding: '.75rem 1rem', borderRadius: '.5rem', border: '1px solid #303030',},
	hoverStyleA = {}
const styleB = {minWidth: '14rem',};

function Button() {
	return (
		<a href="" style={styleA}>Button</a>
	);
}
function ButtonRegular() {
	return (
		<a href="" style={{...styleA, ...styleB}}>Button B</a>
	);
}

export { Button, ButtonRegular };