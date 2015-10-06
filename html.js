var message="";
message += "<tr>";
message += "   <td>";
message += "      <table class = \"data-owner-info\">";
message += "         <tr>";
message += "            <th>Application Prefix<\/th>";
message += "            <th>Application Type<\/th>";
message += "            <th>Primary IT Data Steward<\/th>";
message += "            <th>Secondary IT Data Steward<\/th>";
message += "            <th>Business Application Owner<\/th>";
message += "         <\/tr>";
message += "         <tr>";
message += "            <td>Sen Lin'Testing<\/td>";
message += "            <td>Testing HTML EMAIL<\/td>";
message += "            <td>Bill Gates<\/td>";
message += "            <td>Mark Zuckerberg<\/td>";
message += "            <td>Sen Lin<\/td>";
message += "         <\/tr>";
message += "      <\/table>";
message += "   <td>";
message += "<\/tr>";

message += "<tr>";
message += "   <td>";
message += "      <table class = \"application-details\">";
message += "         <caption>";
message += "         <strong>Application name is Test<\/strong>";
message += "         <caption>";
message += "         <tr>";
message += "            <th>Contains Critical Data<\/th>";
message += "            <th>Business Data Set Name<\/th>";
message += "            <th>ID<\/th>";
message += "            <th>Source Datastore(s)<\/th>";
message += "            <th>Target Datastore(s)<\/th>";
message += "            <th>Usage purpose(s)<\/th>";
message += "            <th>Usage Comments<\/th>";
message += "            <th>Requesting Project<\/th>";
message += "         <\/tr>";
//Data Store 1 
message += "         <tr>";
message += "            <td>Yes<\/td>";
message += "            <td>workday<\/td>";
message += "            <td>123<\/td>";
message += "            <td>Vanguard Crew<\/td>";
message += "            <td>Vanguard Crew2<\/td>";
message += "            <td>Testing<\/td>";
message += "            <td>Test<\/td>";
message += "            <td>workday project<\/td>";
message += "         <\/tr>";

//Data Store 2 
message += "         <tr>";
message += "            <td>No<\/td>";
message += "            <td>workday<\/td>";
message += "            <td>124<\/td>";
message += "            <td>account<\/td>";
message += "            <td>Vanguard Crew2<\/td>";
message += "            <td>Testing<\/td>";
message += "            <td>Test<\/td>";
message += "            <td>workday project<\/td>";
message += "         <\/tr>";

message += "      <\/table>";
message += "   <td>";
message += "<\/tr>";

tw.local.message = message;