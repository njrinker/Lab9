document.addEventListener('DOMContentLoaded', setupScript);

let count = 1;
let tCount = 1;
let btnLog, btnError, btnDir, btnDirXML, btnGroupStart, btnGroupEnd, btnTable, btnTimerStart, btnTimerEnd, btnTrace;

function setupScript() {
	loadVar();
	setupButtons();
}

function loadVar() {
	btnLog = document.getElementById('console-log');
	btnError = document.getElementById('console-error');
	btnDir = document.getElementById('console-dir');
	btnDirXML = document.getElementById('console-dir-XML');
	btnGroupStart = document.getElementById('console-group-start');
	btnGroupEnd = document.getElementById('console-group-end');
	btnTable = document.getElementById('console-table');
	btnTimerStart = document.getElementById('start-timer');
	btnTimerEnd = document.getElementById('end-timer');
	btnTrace = document.getElementById('console-trace');
}

function setupButtons() {
	btnLog.addEventListener('click', () => { console.log('Console Log Demo button clicked') });

	btnError.addEventListener('click', () => { console.error('Console Error Demo button clicked') });

	btnDir.addEventListener('click', () => { console.dir(btnDir); });
    
	btnDirXML.addEventListener('click', () => { console.dirxml(btnDirXML) });
    
	btnGroupStart.addEventListener('click', () => { console.group(`Group ${count}`); });
    
	btnGroupEnd.addEventListener('click', () => { console.groupEnd(`Group ${count++}`); });
    
	btnTable.addEventListener('click', () => { console.table(
		[
			{
				'Name': 'Squirtle',
				'Type1': 'water',
			},
			{
				'Name': 'Weavile',
				'Type1': 'ice',
				'Type2': 'dark'
			},
			{
				'Name': 'Pikachu',
				'Type1': 'electric'
			}
		]);
	});

	btnTimerStart.addEventListener('click', () => { console.time(`Timer ${tCount}`); console.log('Timer started!'); });

	btnTimerEnd.addEventListener('click', () => { console.log('Timer stopped!'); console.timeEnd(`Timer ${tCount++}`); });

	btnTrace.addEventListener('click', () => { a() });
}

function a () {
	console.log('wild');
	b();
}

function b() {
	console.log('goose');
	c();
}

function c() {
	console.log('chase');
	console.trace();
}

window.onerror = function(event) {
	TrackJS.track('Global error triggered!');

	setTimeout(()=> {
    console.log('Error Detected');
	}, 100);
}