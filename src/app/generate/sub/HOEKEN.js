export const hoeken = `%
<HOEKEN>IF[#168NE90]GOTO7
#131=#601
#601=#602
#602=#131
N7
#121=[#601-#120]/2
#122=[#602-#120]/2
#123=ABS[#115]

G68X0Y0R#168
G00G90G43X#121Y#122Z50.H#110D#110
G81G98R2.0Z-#123
X-#121Y#122
X-#121Y-#122
X#121Y-#122
G80
G69
G0Z50
IF[#168NE90]GOTO9
#131=#601
#601=#602
#602=#131
N9
M99
%`;