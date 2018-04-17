webpackJsonp([0xbccdff6a35e0],{468:function(e,t){e.exports={data:{markdownRemark:{html:"<p>HackerOne tracks and enables you to define SLA targets for these 4 response SLA times:</p>\n<table>\n<thead>\n<tr>\n<th>Time</th>\n<th>Details</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Time to first response</td>\n<td>The elapsed time from report creation to the first public activity on a report. The first public activity includes adding a public comment, changing the report state, or changing the report severity.</td>\n</tr>\n<tr>\n<td>Time to triage</td>\n<td>The elapsed time from when a report is created to when a report is changed to a triaged state. A report can skip the triaged state and move directly to a closed state (e.g. resolved).</td>\n</tr>\n<tr>\n<td>Time to bounty</td>\n<td><em>(Bounty programs only)</em>\n The elapsed time from when a report is triaged to when a bounty is paid. Only reports that are eligible for a bounty will be tracked as part of this metric. The time to bounty timer will run until the report is either marked as ineligible or closed as a state where it’s not normal to award a bounty (e.g. spam).</td>\n</tr>\n<tr>\n<td>Time to resolution</td>\n<td>The elapsed time between report triaged and report closed. These  five closed report states will stop the timer: resolved, informative, not applicable, duplicate, and spam.</td>\n</tr>\n</tbody>\n</table>\n<p>All response SLA times are tracked and reported in business days. Business days are defined to be:</p>\n<ul>\n<li>Monday - Friday</li>\n<li>24 hours</li>\n<li>Including holidays (hackers never sleep!)</li>\n</ul>\n<p>Some response SLA definitions to keep in mind when configuring your program's target response SLAs are:</p>\n<table>\n<thead>\n<tr>\n<th>Term</th>\n<th>Detail</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Recommended</td>\n<td>The default setting for all new programs. HackerOne's suggested setting for best practice.</td>\n</tr>\n<tr>\n<td>Limit</td>\n<td>The maximum acceptable response time as defined by HackerOne. For programs that don't meet HackerOne’s limits, HackerOne may temporarily pause new report submissions. When these programs address their SLA failing reports, report submissions will automatically resume.</td>\n</tr>\n<tr>\n<td>Target</td>\n<td>The target responsiveness set by an individual program. Reports are individually denoted if the SLA \"missed\" or \"failed.\" Program targets can’t be set to exceed the limit.</td>\n</tr>\n</tbody>\n</table>\n<h3>Healthy Response SLA Times</h3>\n<p>HackerOne recommends your program to follow the following response SLA times to ensure a healthy program:</p>\n<table>\n<thead>\n<tr>\n<th>Time</th>\n<th>Recommended</th>\n<th>Limit</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Time to first response</td>\n<td>1 day</td>\n<td>5 days</td>\n</tr>\n<tr>\n<td>Time to triage</td>\n<td>2 days</td>\n<td>10 days</td>\n</tr>\n<tr>\n<td>Time to bounty</td>\n<td>1 day (after triage)</td>\n<td>N/A</td>\n</tr>\n<tr>\n<td>Time to resolution</td>\n<td>30 days</td>\n<td>N/A</td>\n</tr>\n</tbody>\n</table>\n<p>*Note: All times above are in business days</p>\n<h3>Pausing Timers</h3>\n<p>HackerOne will automatically pause response SLA times when you're waiting on a response from a hacker so that your team isn’t disadvantaged during the wait period. When you change the report state to <em>Needs more info</em>, the timer will pause while waiting on a response from a hacker. The timer will start again when a hacker replies and comments on the report.</p>\n<h3>FAQs</h3>\n<table>\n<thead>\n<tr>\n<th>Question</th>\n<th>Answer</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Which actions trigger first response?</td>\n<td>First response is triggered by any public action on a report, such as, adding a comment (publicly), changing the report state, or changing the severity. Automated actions from Hackbot or an automated trigger are not recognized. Only actions or comments from a member of the team will count as a first response.</td>\n</tr>\n<tr>\n<td>How are the report timers affected if a report is closed then reopened?</td>\n<td>The timers are not affected as we don’t account  for reopened reports. Once a report is closed, its’ response efficiency metrics won’t  change.</td>\n</tr>\n<tr>\n<td>How are the report timers affected if a report is filtered first through human augmented signal?</td>\n<td>If a report is routed through human augmented signal (reports flagged with a high noise probability are reviewed by HackerOne analysts before hitting your inbox) the timer is not paused or modified in any way. This means that the time spent in review by HackerOne analysts will be tracked in the timer.</td>\n</tr>\n</tbody>\n</table>",frontmatter:{path:"/programs/response-sla-metrics",title:"Response SLA Metrics"}}},pathContext:{}}}});
//# sourceMappingURL=path---programs-response-sla-metrics-e42255a05c76e17d6610.js.map