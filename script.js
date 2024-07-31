<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">document.addEventListener('DOMContentLoaded', (event) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const tasks = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>todo: [],</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>pending: [],</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>doing: [],</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>blocked: [],</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>done: []</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>function renderTasks() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>for (const [status, tasksList] of Object.entries(tasks)) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>const listElement = document.getElementById(`${status}-list`);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>listElement.innerHTML = '';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>tasksList.forEach((task, index) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>const taskElement = document.createElement('div');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>taskElement.className = 'task';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>taskElement.draggable = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>taskElement.textContent = task;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>taskElement.dataset.status = status;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>taskElement.dataset.index = index;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>taskElement.addEventListener('dragstart', dragStart);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>listElement.appendChild(taskElement);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>function addTask(status) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const input = document.getElementById('new-task');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (input.value.trim()) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>tasks[status].push(input.value.trim());</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>input.value = '';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>renderTasks();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>function dragStart(event) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>event.dataTransfer.setData('text/plain', JSON.stringify({</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>status: event.target.dataset.status,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>index: event.target.dataset.index</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>function dragOver(event) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>event.preventDefault();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>function drop(event) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>event.preventDefault();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const data = JSON.parse(event.dataTransfer.getData('text/plain'));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const fromStatus = data.status;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const fromIndex = data.index;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const toStatus = event.target.id.split('-')[0];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (fromStatus !== toStatus) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>const [task] = tasks[fromStatus].splice(fromIndex, 1);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>tasks[toStatus].push(task);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>renderTasks();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>document.querySelectorAll('.task-list').forEach(column =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>column.addEventListener('dragover', dragOver);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>column.addEventListener('drop', drop);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>window.addTask = addTask;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>renderTasks();</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
</body>
</html>
