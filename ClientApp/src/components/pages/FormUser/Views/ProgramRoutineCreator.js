import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { MenuItem } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import { RadioGroup, FormControlLabel, FormLabel, FormControl } from '@mui/material';
import { Radio } from "@material-ui/core";
import axios from "axios";

// import { onvaluechangepreposY } from "../Controller/prcController";
import {
    callBlurPreposYPRC, callBlurPreposXPRC, callBlurPreposZPRC, callBlurPreposY1PRC, callBlurPreposX1PRC,
    callBlurPreposZ1PRC
} from "../Controller/prcController";
import {
    ExpansionPanelDetailsStyle, GridItemStyle, Origin1TextStyle, PRC_MarginTextStyle, containerGridstyle, PRCImgStyle
    , PRC_TextfieldStyle, DesignP_FontTextStyle, PRC_MM_MarginTextStyle, PRC_DivCase_Style, PRC_PreposTextStyle
} from '../../DashboardPage_UI/UICommonStyles'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const ProgramRoutineCreator = ({
    handleChangepanel,
    S_algo_loaded,
    expanded_panel,
    S_errorPreposy,
    S_errorhelpertextForPreposy,
    S_selectedOne,
    S_setnumbery,
    S_setnumbery2,
    // callBlurPreposYPRC,
    onvaluechangepreposY,
    S_errorPreposx,
    S_errorhelpertextForPreposx,
    S_setnumberx,
    S_setnumberx2,
    onvaluechangepreposX,
    // callBlurPreposXPRC,

    S_errorPreposz,
    S_errorhelpertextForPreposz,
    S_setnumberz,
    S_setnumberz2,
    onvaluechangepreposZ,
    // callBlurPreposZPRC,

    handleAutoGeneratePrepos,
    savePrc,
    S_case_data,
    S_colorA,
    S_colorB,
    showOnFieldsClickGreenRect,
    G_casedata,
    S_CasesXYfotGreenRectPRC,
    S_AllAvlNrPosInDropDownList,
    handleValueChangePrepos,
    // callBlurPreposY1PRC,
    // callBlurPreposX1PRC,
    // callBlurPreposZ1PRC,
    S_NrPosInDropDownList,
    noofcaseA,
    noofcaseB,
    noofcaseC,
    objPRC,
    exceptThisSymbols,
    exceptThisSymbolsprc,
    OffsetChangePrc,
    S1_for_name,

    // name,
    // e,
    // G_setpreposy,
    // S1_setnumbery,
    // G_globalScaley,
    // S1_for_name,
    // S_selectedTwo,


    G_globalScaley,
    S_selectedTwo,
    G_globalScaley2,
    S1_setnumbery,
    S1_setnumbery2,


    G_globalScalex,
    S1_setnumberx,
    S1_setnumberx2,
    G_globalScalex2,


    G_globalScalez,
    S1_setnumberz,
    G_globalScalez2,
    S1_setnumberz2,



    name,
    event,

    G_outerRect1_xpos,
    G_outerRect2_xpos,
    G_outerRect1_width,
    G_outerRect2_width,
    G_outerRect1_ypos,
    G_outerRect2_ypos,
    G_outerRect1_length,
    G_outerRect2_length,
    G_ctx_greenRect,
    G_myRef_GR,
    G_ctx_GRCaseFreez,
    G_casedataA1,
    G_casedataB1,
    G_casedataC1,
    G_casedataA2,
    G_casedataB2,
    G_casedataC2,
    G_autoGenerateCasePositionsDistance,
    G_setpreposx,
    G_setpreposy,
    G_freezNRarray,
    S_palletid,
    S1_NrPosInDropDownList,
    S1_case_data,
    autoGenerateCaseFreez,
    S_colorC,
    map,
    G_preposx,
    G_preposy,
    G_preposz,
    G_layer_sequence,
    G_case_data,
    S1_for_setnumbery,


    t,
    color1,
    Green_arrow,
    Red_arrow,
    Light_Blue_arrow,

    freesedCaseCount,
    palletid,
    handleChangepanel_forToast,
    autoGenerateRadioButton
}) => {


    const caseData = G_casedata;
    const index_FreesedCaseCount = freesedCaseCount;


    const savePrePosPRC = () => {
        // const palletid = this.props.match.params.palletid;
        console.log(palletid);
        try {

            // .put(`/Threed/positions/${palletid}`, {
            //   prePos_X_for_Auto: prePos.prePos_X_for_Auto,
            //   prePos_Y_for_Auto: prePos.prePos_Y_for_Auto,
            //   prePos_Z_for_Auto: prePos.prePos_Z_for_Auto,
            // })
            if (S_selectedOne) {
                axios.put(`/Threed/positions/${palletid}`, {
                    prePos_X_for_Auto: S_setnumberx,
                    prePos_Y_for_Auto: S_setnumbery,
                    prePos_Z_for_Auto: S_setnumberz,
                })
                    .then((res) => {
                        // console.log(res.data);
                    });
            } else {
                axios.put(`/Threed/positions/${palletid}`, {
                    prePos_X_for_Auto: S_setnumberx2,
                    prePos_Y_for_Auto: S_setnumbery2,
                    prePos_Z_for_Auto: S_setnumberz2,
                })
                    .then((res) => {
                        // console.log(res.data);
                    });
            }


        } catch (e) {
            console.log(e);
        }
    };
    return (
        <>
            <Grid item xs={12} style={{ marginTop: "7px" }}>
                <ExpansionPanel
                    style={ExpansionPanelDetailsStyle}
                    expanded={expanded_panel === "panel5"}
                    onChange={S_algo_loaded == true ? handleChangepanel("panel5") : handleChangepanel_forToast('panel5')}
                // onClick={this.callSchema1}
                >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        id="panel1-header"
                    >
                        <Typography>{t("programRoutineCreator")}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid
                            container
                            style={containerGridstyle}
                        >
                            <Grid
                                item
                                xs={12}
                                style={GridItemStyle}
                            >
                                <TextField
                                    id="outlined-read-only-input"
                                    label=""
                                    defaultValue={t("prePos")}
                                    // className={classes.textField}
                                    margin="dense"
                                    style={PRC_MarginTextStyle}
                                    InputProps={{
                                        readOnly: true,
                                        disableUnderline: true,
                                        style: {
                                            fontSize: 12,
                                            left: "10px",
                                            bottom: "2px",
                                            left: "10px",
                                            padding: 1,
                                        },
                                    }}
                                    variant="standard"
                                    size="small"
                                />
                                <div>
                                    <section className="one-fourth" id="html">
                                        <img src={Green_arrow} draggable="false" style={PRCImgStyle} />
                                    </section>
                                </div>
                                <TextField
                                    style={PRC_TextfieldStyle}
                                    id="outlined-xdimp1"
                                    type="number"

                                    error={S_errorPreposy}
                                    helperText={S_errorhelpertextForPreposy}
                                    value={S_selectedOne ? S_setnumbery == null ? 0 : S_setnumbery : S_setnumbery2 == null ? 0 : S_setnumbery2}
                                    onChange={onvaluechangepreposY(
                                        S_selectedOne ? "setnumbery" : "setnumbery2"
                                    )}
                                    onBlur={(e) => {
                                        savePrePosPRC()
                                        // callBlurPreposYPRC(
                                        //   e,
                                        //   S_selectedOne,
                                        //   S_setnumbery,
                                        //   G_globalScaley,
                                        //   S_selectedTwo,
                                        //   S_setnumbery2,
                                        //   G_globalScaley2,
                                        // //   savePrc,
                                        //   S1_setnumbery,
                                        //   S1_setnumbery2
                                        // )
                                    }}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}


                                    InputLabelProps={{
                                        shrink: true,
                                        style: DesignP_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: DesignP_FontTextStyle
                                    }}
                                    margin="dense"
                                    variant="outlined"
                                    size="small"
                                />
                                <TextField
                                    id="outlined-read-only-input"
                                    label=""
                                    defaultValue="mm"
                                    // className={classes.textField1}
                                    margin="dense" style={PRC_MM_MarginTextStyle}
                                    InputProps={{
                                        readOnly: true,
                                        maxLength: 2,
                                        disableUnderline: true,
                                        style: { fontSize: 12, }
                                    }}
                                    variant="standard"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} style={GridItemStyle}>
                                <TextField
                                    id="outlined-read-only-input"
                                    label=""
                                    defaultValue={t('prePos')}
                                    // className={classes.textField}
                                    margin="dense" style={PRC_MarginTextStyle}
                                    InputProps={{
                                        readOnly: true,
                                        disableUnderline: true,
                                        style: { fontSize: 12, left: "10px", bottom: "2px", left: "10px", padding: 1 }
                                    }}
                                    variant="standard"
                                    size="small"
                                />
                                {/* <div style={{ color: '#b85450', marginBottom:"8px", marginTop:"7px", marginLeft:"34px"}} className="arrow" >
                    <TrendingFlatIcon id="trending-flaticon" />
                  </div> */}
                                <div>
                                    <section className="one-fourth" id="html">
                                        <img src={Red_arrow} draggable="false" style={PRCImgStyle} />
                                    </section>
                                </div>
                                <TextField
                                    style={PRC_TextfieldStyle}
                                    id="outlined-ydimp2"
                                    type="number"

                                    error={S_errorPreposx}
                                    helperText={S_errorhelpertextForPreposx}
                                    // value={S_selectedOne ? S_setnumberx  : S_setnumberx2}
                                    value={S_selectedOne ? S_setnumberx == null ? 0 : S_setnumberx : S_setnumberx2 == null ? 0 : S_setnumberx2}
                                    onChange={onvaluechangepreposX(
                                        S_selectedOne ? "setnumberx" : "setnumberx2",

                                    )}
                                    onBlur={(e) => {
                                        savePrePosPRC()
                                        // callBlurPreposXPRC(
                                        //   e,
                                        //   S_selectedOne,
                                        //   S_setnumberx,
                                        //   G_globalScalex,
                                        //   S1_setnumberx,
                                        //   S_selectedTwo,
                                        //   S_setnumberx2,
                                        //   S1_setnumberx2,
                                        //   G_globalScalex2,
                                        // //   savePrc
                                        // )
                                    }}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}

                                    InputLabelProps={{
                                        shrink: true,
                                        style: DesignP_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: DesignP_FontTextStyle
                                    }}
                                    margin="dense"
                                    // style={{ height: 38 }}
                                    variant="outlined"
                                    size="small"
                                />
                                <TextField
                                    id="outlined-read-only-input"
                                    label=""
                                    defaultValue="mm"
                                    // className={classes.textField1}
                                    margin="dense" style={PRC_MM_MarginTextStyle}
                                    InputProps={{
                                        readOnly: true,
                                        maxLength: 2,
                                        disableUnderline: true,
                                        style: { fontSize: 12, }
                                    }}
                                    variant="standard"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} style={GridItemStyle}>
                                <TextField
                                    id="outlined-read-only-input"
                                    label=""
                                    defaultValue={t('prePos')}
                                    // className={classes.textField}
                                    margin="dense" style={PRC_MarginTextStyle}
                                    InputProps={{
                                        readOnly: true,
                                        disableUnderline: true,
                                        style: { fontSize: 12, left: "10px", bottom: "2px", left: "10px", padding: 1 }
                                    }}
                                    variant="standard"
                                    size="small"
                                />


                                <div>
                                    <section className="one-fourth" id="html">
                                        <img src={Light_Blue_arrow} draggable="false" style={PRCImgStyle} />
                                    </section>



                                </div>
                                <TextField
                                    style={PRC_TextfieldStyle}
                                    id="outlined-zdimp3"
                                    error={S_errorPreposz}
                                    helperText={S_errorhelpertextForPreposz}
                                    // value={S_selectedOne ? S_setnumberz : S_setnumberz2}
                                    value={S_selectedOne ? S_setnumberz == null ? 0 : S_setnumberz : S_setnumberz2 == null ? 0 : S_setnumberz2}
                                    onChange={onvaluechangepreposZ(S_selectedOne ? "setnumberz" : "setnumberz2")}
                                    onBlur={(e) => {
                                        savePrePosPRC()
                                        // callBlurPreposZPRC(
                                        //   e,
                                        //   S_selectedOne,
                                        //   S_setnumberz,
                                        //   G_globalScalez,
                                        //   S1_setnumberz,
                                        //   S_selectedTwo,
                                        //   S_setnumberz2,
                                        //   G_globalScalez2,
                                        //   S1_setnumberz2,
                                        // //   savePrc
                                        // )
                                    }}
                                    onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                    type="number"
                                    // className={classes.textField2}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: DesignP_FontTextStyle
                                    }}
                                    InputProps={{
                                        style: DesignP_FontTextStyle
                                    }}
                                    // style={{ height: 38}}
                                    variant="outlined"
                                    size="small"
                                />
                                <TextField
                                    id="outlined-read-only-input"
                                    label=""
                                    defaultValue="mm"
                                    // className={classes.textField1}
                                    margin="dense" style={PRC_MM_MarginTextStyle}
                                    InputProps={{
                                        readOnly: true,
                                        maxLength: 2,
                                        disableUnderline: true,
                                        style: { fontSize: 12, }
                                    }}
                                    variant="standard"
                                    size="small"
                                />
                            </Grid>

                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', padding: 0, width: "100%", height: "48px", backgroundColor: "#f5f5f5", marginBottom: "4px" }}>
                                <TextField
                                    id="outlined-read-only-input"
                                    label=""
                                    defaultValue={t('autoGenerateCasePosition')}
                                    // className={classes.textField}
                                    margin="dense" style={{ height: 27, width: "536px", top: "8px" }}
                                    InputProps={{
                                        readOnly: true,
                                        disableUnderline: true,
                                        style: Origin1TextStyle
                                    }}
                                    variant="standard"
                                    size="small"
                                />

                                <FormControl>

                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue=""
                                        name="radio-buttons-group"
                                        onClick={handleAutoGeneratePrepos({
                                            name: "auto_generation"
                                        })}
                                        onBlur={savePrc}

                                    >
                                        <FormControlLabel
                                            style={{ marginLeft: "28px", marginBottom: "2px", marginTop: "15px", width: "18%", height: "18px" }}
                                            control={<Radio />}
                                            checked={autoGenerateRadioButton}
                                        //  label={autoGenerateRadioButton ? "" : ""}
                                        />

                                    </RadioGroup>
                                </FormControl>
                            </Grid>



                            {S_case_data.length > 0 && [...Array(S_colorA == "#5eb8b3" ? noofcaseA : S_colorB == "#5eb8b3" ? noofcaseB : noofcaseC)].map(

                                (value, index) => {

                                    return (
                                        <Grid item xs={12} style={{ display: index + 1 > S_CasesXYfotGreenRectPRC.length ? 'none' : 'flex', flexDirection: 'column', padding: 8, backgroundColor: "#f5f5f5", marginBottom: "4px" }}>
                                            <>
                                                <div onClick={(e) => showOnFieldsClickGreenRect(index, G_casedata, e)} style={{ display: 'flex', flexDirection: 'row', backgroundColor: "#f5f5f5" }}>
                                                    <TextField
                                                        id="Case"
                                                        label="" // handleSelection
                                                        value={t('case') + " " + (index + 1)}
                                                        margin="dense" style={{ height: 38 }}
                                                        InputProps={{
                                                            readOnly: true,
                                                            disableUnderline: true,
                                                            style: { fontSize: 12, color: index + 1 > S_CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }
                                                        }}
                                                        variant="standard"
                                                        size="small"
                                                    />

                                                    <div>
                                                        <section className="one-fourth" id="html">
                                                            <img src={Green_arrow} draggable="false" style={{ color: "green", marginTop: "4px", marginLeft: "29px", width: "60px", }} />
                                                        </section>
                                                    </div>
                                                    <TextField
                                                        id="outlined-read-only-input"
                                                        label=""

                                                        margin="dense" style={{ height: 38 }}
                                                        InputProps={{
                                                            readOnly: true,
                                                            disableUnderline: true,
                                                            defaultValue: t('negative') + ":",
                                                            style: { fontSize: 12, padding: 5, marginLeft: "-48px", color: index + 1 > S_CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }
                                                        }}
                                                        variant="standard"
                                                        size="small"
                                                    />



                                                    <div>
                                                        <section className="one-fourth" id="html">
                                                            <img src={Red_arrow} draggable="false" style={{ color: "red", marginTop: "4px", marginLeft: "-7px", width: "60px", }} />
                                                        </section>
                                                    </div>
                                                    <Checkbox style={{ height: "18px", width: "18px", top: "16px", right: "43px" }} {...label}

                                                        name="offsetYneg"
                                                        disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                        sx={{
                                                            color: "grey",
                                                            '&.Mui-checked': {
                                                              color: "rgb(0,125,129)",
                                                            },
                                                          }}
                                                        onClick={(e) => OffsetChangePrc(index, S_case_data[index]?.offset_Y_neg, e)}
                                                        checked={S_case_data[index]?.offset_Y_neg}
                                                        onBlur={savePrc}
                                                    />
                                                    <TextField
                                                        id="outlined-read-only-input"
                                                        label=""

                                                        margin="dense" style={{ height: 38 }}
                                                        InputProps={{
                                                            readOnly: true,
                                                            disableUnderline: true,
                                                            defaultValue: "",
                                                            style: { fontSize: 12, padding: 5, marginLeft: "-5px", color: index + 1 > S_CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }
                                                        }}
                                                        variant="standard"
                                                        size="small"
                                                    />

                                                    {/* {console.log("checked index " + index + " this.state.case_data[index] " + G_casedata[index])} */}

                                                    <Checkbox style={{ width: "18px", height: "18px", right: "76px", top: "16px" }}{...label}


                                                        name="offsetXneg"
                                                        disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                        onClick={(e) => OffsetChangePrc(index, S_case_data[index]?.offset_X_neg, e)}
                                                        sx={{
                                                            color: "grey",
                                                            '&.Mui-checked': {
                                                              color: "rgb(0,125,129)",
                                                            },
                                                          }}
                                                        checked={S_case_data[index]?.offset_X_neg}
                                                        onBlur={savePrc}


                                                    />
                                                    <TextField
                                                        style={{ border: "1px solid white !important", height: "27px", top: "3px", right: "60px", width: "44%", backgroundColor: "white", paddingLeft: "3px" }}
                                                        id="outlined-typeNrnum"
                                                        value={index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.position}
                                                        name="position"
                                                        onChange={(e) => OffsetChangePrc(index, S_case_data[index]?.position, e)}
                                                        onBlur={savePrc}
                                                        select
                                                        disabled={index == 0 || index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                            style: { fontSize: "12px", height: "27px" }
                                                        }}
                                                        InputProps={{
                                                            style: { fontSize: "12px", height: "27px" }
                                                        }}
                                                        margin="dense"
                                                        // style={{ height: "38px" }}
                                                        variant="outlined"
                                                        size="small">

                                                        <MenuItem value="">Set Empty</MenuItem>

                                                        {console.log("this.state.NrPosInDropDownList inside UI: " + S_NrPosInDropDownList)}
                                                        {index + 1 <= S_CasesXYfotGreenRectPRC.length && S_case_data.length > 0 && S_AllAvlNrPosInDropDownList.filter((NrValues, i) => {
                                                            return !S_NrPosInDropDownList.includes(NrValues);
                                                        }).map((NRvalue, index1) => {
                                                            return <MenuItem value={NRvalue}>{NRvalue}</MenuItem>;
                                                        })}



                                                    </TextField>
                                                    <span unselectable="on" style={{ position: "absolute", cursor: "pointer", fontSize: "12px", marginTop: "16px", marginLeft: "336.5px" }}>{index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : S_case_data[index]?.position}</span>

                                                    <Checkbox
                                                        className='checkbox'
                                                        name="position_freezed"
                                                        disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : false} //disabled for extra cases
                                                        checked={index + 1 > S_CasesXYfotGreenRectPRC.length ? false : S_case_data[index]?.position_freezed}
                                                        onBlur={savePrc}
                                                        onClick={(e) => OffsetChangePrc(index, S_case_data[index]?.position_freezed, e)}
                                                        sx={{
                                                            color: "grey",
                                                            '&.Mui-checked': {
                                                              color: "rgb(0,125,129)",
                                                            },
                                                          }}
                                                        style={{ width: "18px", height: "18px", top: "15px", left: "-45px" }} {...label} />
                                                </div>

                                                <div style={PRC_DivCase_Style}>
                                                    <div style={{ display: 'flex', flexDirection: 'row', padding: "1px", marginBottom: "1px", }}>
                                                        <div style={{ display: 'flex', flexDirection: 'row', border: "1px solid white !important", height: "27px" }}>
                                                            <div style={{ fontSize: "12px", width: "83%", marginTop: "5px", marginLeft: "3px", color: index + 1 > S_CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }}>{t('EndPosition')}</div>
                                                            <div>
                                                                <section className="one-fourth" id="html">
                                                                    <img src={Green_arrow} draggable="false" style={{ color: "green", marginTop: "-4px", marginLeft: "11px", width: "60px", zIndex: "10" }} />
                                                                </section>
                                                            </div>

                                                            <TextField style={{ height: "27px", marginTop: "3px", left: "44px", width: "91px", }}
                                                                id="outlined-read-only-input-yendposition"
                                                                label=""
                                                                defaultValue=""
                                                                value={G_casedata[index].case_y_position == 0 ? "--" : (G_casedata && G_casedata[index] ? G_casedata[index].case_y_position : '')}
                                                                // value={G_casedata && G_casedata[NrPos_Index] ? (G_casedata && G_casedata[index] ? G_casedata[NrPos_Index].case_y_position : '') : "--"}
                                                                margin="dense"
                                                                InputProps={{
                                                                    readOnly: true,
                                                                    disableUnderline: true,
                                                                    style: { fontSize: "12px", left: "20px", top: "3px" }
                                                                }}
                                                                variant="standard"
                                                                size="small"
                                                            />


                                                        </div>


                                                        <div>
                                                            <section className="one-fourth" id="html">
                                                                <img src={Red_arrow} draggable="false" style={{ color: "red", marginTop: "-4px", marginLeft: "38px", width: "60px", }} />
                                                            </section>
                                                        </div>
                                                        <TextField style={{ height: "27px", marginTop: "4px", left: "70px", width: "60px", }}
                                                            id="outlined-read-only-input-xendposition"
                                                            label=""
                                                            defaultValue=""
                                                            value={G_casedata[index].case_x_position == 0 ? "--" : (G_casedata && G_casedata[index] ? G_casedata[index].case_x_position : '')}
                                                            margin="dense"
                                                            InputProps={{
                                                                readOnly: true,
                                                                disableUnderline: true,
                                                                style: { fontSize: "12px", left: "23px", top: "3px" }
                                                            }}
                                                            variant="standard"
                                                            size="small"
                                                        />

                                                        <div>
                                                            <section className="one-fourth" id="html">
                                                                <img src={Light_Blue_arrow} draggable="false" style={{ color: "lightblue", marginTop: "-4px", marginLeft: "63px", width: "60px", }} />
                                                            </section>
                                                        </div>
                                                        <TextField style={{ height: "27px", marginTop: "4px", left: "95px", width: "60px", }}
                                                            id="outlined-read-only-input-zendposition"
                                                            label=""
                                                            defaultValue=""
                                                            value={G_casedata[index].case_z_position == 0 || G_casedata[index].case_z_position == "" ? "--" : (G_casedata && G_casedata[index] ? G_casedata[index].case_z_position : '')}
                                                            // value={G_casedata[index].case_z_position}
                                                            margin="dense"
                                                            InputProps={{
                                                                readOnly: true,
                                                                disableUnderline: true,
                                                                style: { fontSize: "12px", left: "25px", top: "3px" }
                                                            }}
                                                            variant="standard"
                                                            size="small"
                                                        />
                                                        <div className='unit' style={{ fontSize: "12px", marginTop: "2px", padding: "6px", marginLeft: "95px", color: index + 1 > S_CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }}>mm</div>
                                                        {/* </div> */}
                                                    </div>
                                                </div>


                                                <div style={PRC_DivCase_Style}>
                                                    <div style={{ display: 'flex', flexDirection: 'row', padding: "1px", marginBottom: "1px", marginTop: "6px", height: "30px", }}>
                                                        <div style={{ fontSize: "12px", width: "150px", marginTop: "10px", marginLeft: "3px", color: index + 1 > S_CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }}>{t('PrePositionOffset')}</div>
                                                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: "0px", height: "27px", }}>
                                                            <TextField style={{ height: "27px", width: "60px", marginTop: "4px", left: "11px", backgroundColor: "white" }}
                                                                id="outlined-read-only-input_ypos_Prc"
                                                                label=""

                                                                defaultValue=""
                                                                value={index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.pre_Pos_Y}
                                                                onChange={(e) => handleValueChangePrepos({
                                                                    name: "pre_Pos_Y",
                                                                    value: index + 1,

                                                                }, e)}
                                                                onClick={(e) => showOnFieldsClickGreenRect(index, G_casedata, e)}
                                                                onBlur={(e) => callBlurPreposY1PRC(
                                                                    e,
                                                                    index,
                                                                    G_casedata,
                                                                    G_preposy,
                                                                    G_case_data,
                                                                    S1_case_data,
                                                                    S_selectedOne,
                                                                    S_colorA,
                                                                    G_casedataA1,
                                                                    S_colorB,
                                                                    G_casedataB1,
                                                                    S_colorC,
                                                                    G_casedataC1,
                                                                    S_selectedTwo,
                                                                    G_casedataA2,
                                                                    G_casedataB2,
                                                                    G_casedataC2,
                                                                    savePrc,
                                                                )}
                                                                disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                                onKeyDown={e => exceptThisSymbolsprc.includes(e.key) && e.preventDefault()}
                                                                // margin="dense" style={{ height: "27px", width: "61px", marginLeft: "20px", marginTop: "4px", }}
                                                                margin="dense"
                                                                InputProps={{
                                                                    readOnly: false,
                                                                    disableUnderline: true,
                                                                    style: PRC_PreposTextStyle
                                                                }}
                                                                variant="standard"
                                                                size="small"
                                                            />
                                                        </div>


                                                        <TextField style={{ height: "27px", width: "60px", marginTop: "4px", left: "57px", backgroundColor: "white", }}
                                                            id="outlined-read-only-input_xpos_Prc"
                                                            label=""
                                                            defaultValue=""

                                                            disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                            value={index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.pre_Pos_X}
                                                            onChange={(e) => handleValueChangePrepos({
                                                                name: "pre_Pos_X",
                                                                value: index + 1,
                                                            }, e)}
                                                            onClick={(e) => showOnFieldsClickGreenRect(index, G_casedata, e)}
                                                            onBlur={(e) => callBlurPreposX1PRC(
                                                                e,
                                                                index,
                                                                G_preposx,
                                                                G_casedata,
                                                                S1_case_data,
                                                                G_case_data,
                                                                S_selectedOne,
                                                                S_colorA,
                                                                S_colorB,
                                                                S_colorC,
                                                                G_casedataA1,
                                                                G_casedataB1,
                                                                G_casedataC1,
                                                                G_casedataA2,
                                                                G_casedataB2,
                                                                G_casedataC2,
                                                                S_selectedTwo,
                                                                savePrc,
                                                            )}
                                                            onKeyDown={e => exceptThisSymbolsprc.includes(e.key) && e.preventDefault()}
                                                            margin="dense"
                                                            InputProps={{
                                                                readOnly: false,
                                                                disableUnderline: true,
                                                                style: PRC_PreposTextStyle
                                                            }}
                                                            variant="standard"
                                                            size="small"
                                                        />

                                                        <TextField style={{ height: "27px", width: "60px", marginTop: "4px", left: "103px", marginTop: "4px", backgroundColor: "white" }}
                                                            id="outlined-read-only-input_zpos_Prc"
                                                            label=""
                                                            defaultValue=""
                                                            value={index + 1 > S_CasesXYfotGreenRectPRC.length ? "" : objPRC[index]?.pre_Pos_Z}
                                                            onChange={(e) => handleValueChangePrepos({
                                                                name: "pre_Pos_Z",
                                                                value: index + 1,
                                                            }, e)}
                                                            onClick={(e) => showOnFieldsClickGreenRect(index, G_casedata, e)}
                                                            onBlur={(e) => callBlurPreposZ1PRC(e,
                                                                index,
                                                                G_preposz,
                                                                G_casedata,
                                                                S1_case_data,
                                                                G_case_data,
                                                                S_selectedOne,
                                                                S_selectedTwo,
                                                                S_colorA,
                                                                S_colorB,
                                                                S_colorC,
                                                                G_casedataA1,
                                                                G_casedataB1,
                                                                G_casedataC1,
                                                                G_casedataA2,
                                                                G_casedataB2,
                                                                G_casedataC2,
                                                                savePrc,
                                                            )}
                                                            disabled={index + 1 > S_CasesXYfotGreenRectPRC.length ? true : S_case_data[index]?.position_freezed}
                                                            onKeyDown={e => exceptThisSymbolsprc.includes(e.key) && e.preventDefault()}
                                                            margin="dense"
                                                            InputProps={{
                                                                readOnly: false,
                                                                disableUnderline: true,
                                                                style: PRC_PreposTextStyle
                                                            }}
                                                            variant="standard"
                                                            size="small"
                                                        />
                                                    </div>
                                                    <div className='unit' style={{ fontSize: "12px", marginTop: "6px", padding: "8px", marginLeft: "99px", color: index + 1 > S_CasesXYfotGreenRectPRC.length ? "#bab8b8" : "black" }}>mm</div>
                                                </div>
                                            </>

                                        </Grid>
                                    );

                                }
                            )}
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
        </>
    );
}

export default ProgramRoutineCreator;
