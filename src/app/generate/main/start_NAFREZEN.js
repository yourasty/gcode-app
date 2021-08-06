function start_nafrezen(inputs, tool) {
  const code = `%
    O6007(PREMILLING KAMER)
    #601=${inputs.pocket_x}(POCKET SIZE IN X)
    #602=${inputs.pocket_y}(POCKET SIZE IN Y)
    #24=${inputs.wall_x}(WALL IN X)
    #25=${inputs.wall_y}(WALL IN Y)
    #605=${inputs.pockets_in_x}(NUMBER OF POCKETS IN X-AS)
    #606=${inputs.pockets_in_y}(NUMBER OF POCKETS IN Y-AS)
    #115=${inputs.pocket_depth}(DEPTH)
    #168=${inputs.pocket_rotation}(ROTATION 0 OF 90)
    #117=10.35(R/C OP DE HOEK)

    (NULPUNT BEREKENING)
    #620=[[#605/2]-0.5]*[#601+#24]
    #621=[[#606/2]-0.5]*[#602+#25]
    #7001=-#620(X WAARDE G54.1P1)
    #7002=-#621(Y WAARDE G54.1P1)
    M00
    T${inputs.tools[inputs.pocket_tool[tool]].number}M6
    S3032M3F1149
    #110=${inputs.tools[inputs.pocket_tool[tool]].dh}(D/H NUMMER)

    G1902B220D220H100I110J110K0.
    (SEPT 2019)
    G54(NULPUNT MIDDEN PLAAT)

    (******* PROGRAMMA *******)
    N5
    #603=0
    #604=0
    #623=0
    #625=0
    #610=FIX[#606/2]
    #611=#606/2
    IF[#610EQ#611]GOTO10
    #623=1(ONEVEN AANTAL RIJEN IN Y)
    #612=FIX[#605/2]
    #613=#605/2
    IF[#612EQ#613]GOTO10
    #625=1(ONEVEN AANTAL KOLOMMEN IN X)

    N10
    #150=-#620+[#24+#601]*#603(POSITIE X)
    #151=-#621+[#25+#602]*#604(POSITIE Y)
    G52X#150Y#151(NULPUNT VERSCHUIVING)
    M98<NAFREZEN>
    #150=-1*#150
    #151=-1*#151
    G52X#150Y#151(NULPUNT VERSCHUIVING)
    M98<NAFREZEN>

    #603=#603+1
    IF[#603LT#605]GOTO10
    #603=0
    #604=#604+1
    IF[#604LT#610]GOTO10

    N20(MIDDELSTE RIJ BIJ ONEVEN Y)
    IF[#623NE1]GOTO50
    #603=0
    #604=0
    N25
    #150=-#620+[#24+#601]*#603(POSITIE X)
    G52X#150Y0(NULPUNTVERSCHUIVING)
    M98<NAFREZEN>
    #150=-1*#150
    G52X#150Y0(NULPUNTVERSCHUIVING)
    M98<NAFREZEN>
    #603=#603+1
    IF[#603LT#612]GOTO25

    N30(MIDDELSTE VAK BIJ ONEVEN X)
    IF[#625NE1]GOTO50
    G52X0Y0(NULPUNTVERSCHUIVING)
    M98<NAFREZEN>

    N50(EINDE)
    G52X0Y0
    G00Z50
    M30
    %`;

  return code;
}

export default start_nafrezen;
