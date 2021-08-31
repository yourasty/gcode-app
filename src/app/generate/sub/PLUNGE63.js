export const plunge63 = `
%
<PLUNGE63>
IF[#168NE90]GOTO7
#131=#601
#601=#602
#602=#131
N7

#116=6(MAX.BREEDTE STAP)
#121=[#601/2]-31.5-#118
#122=[#602/2]-31.5-#118
#124=#121*2(LENGTE IN X)
#125=FUP[#124/#116](AANTAL IN X)
#126=#124/#125(STAP IN X)
#127=#122*2(LENGTE IN Y)
#128=FUP[#127/#116](AANTAL IN Y)
#129=#127/#128(STAP IN Y)
#123=ABS[#115]


G68X0Y0R#168
G00G90G43X#121Y#122Z50H#110D#110
#100=0(TELLER IN X)
#101=0(TELLER IN Y)
N10
G91G00X-#126
G90
G99G81R2.Z-#123
G80
#100=#100+1
IF[#100LT#125]GOTO10
#100=0(TELLER IN X)
#101=0(TELLER IN Y)
N20
G91G00Y-#129
G90
G99G81R2.Z-#123
G80
#101=#101+1
IF[#101LT#128]GOTO20
#100=0(TELLER IN X)
#101=0(TELLER IN Y)
N30
G91G00X#126
G90
G99G81R2.Z-#123
G80
#100=#100+1
IF[#100LT#125]GOTO30
#100=0(TELLER IN X)
#101=0(TELLER IN Y)
N40
G91G00Y#129
G90
G99G81R2.Z-#123
G80
#101=#101+1
IF[#101LT#128]GOTO40
G69
G0Z50
IF[#168NE90]GOTO9
#131=#601
#601=#602
#602=#131
N9
M99
%`;
