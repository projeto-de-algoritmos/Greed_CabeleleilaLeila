import React, { useEffect, useState } from "react";
import {
    Box,
    TextField,
    Button,
    Grid,
    Typography,
    Tooltip,
    FormControl,
    MenuItem,
    Select,
    InputLabel
} from '@mui/material';

export function Home () {

    const [opcao, setOpcao] = useState('');
    const [horario, setHorario] = useState('');
    const [cliente, setCliente] = useState('');
    const [toggle, setToggle] = useState(false);
    const [sessao, setSessao] = useState({});
    const [listaSessoes, setListaSessoes] = useState([]);

    const horariosConversao =
    [
        {valor:1, hora:'10:00'},
        {valor:2, hora:'10:30'},
        {valor:3, hora:'11:00'},
        {valor:4, hora:'11:30'},
        {valor:5, hora:'12:00'},
        {valor:6, hora:'12:30'},
        {valor:7, hora:'13:00'},
        {valor:8, hora:'13:30'},
        {valor:9, hora:'14:00'},
        {valor:10, hora:'14:30'},
        {valor:11, hora:'15:00'},
        {valor:12, hora:'15:30'},
        {valor:13, hora:'16:00'},
        {valor:14, hora:'16:30'},
        {valor:15, hora:'17:00'},
        {valor:16, hora:'17:30'},
        {valor:17, hora:'18:00'},
        {valor:18, hora:'18:30'},
        {valor:19, hora:'19:00'},
        {valor:20, hora:'19:30'}
    ]

    const conversor = (valor) => {
        let index;
        index = horariosConversao.findIndex(x => x.valor = valor)

        return horariosConversao[index].hora;
    }


    const handleChangeHorario = (event) => {
        setHorario(event.target.value);
    };

    const handleChange = (event) => {
        setOpcao(event.target.value);
    };

    const handleClick = () => {

        setListaSessoes([...listaSessoes, sessao]);
    }

    useEffect(() => {
        if(opcao && horario && cliente){
            setSessao(
                {
                    clienteSessao: cliente,
                    horarioInicial: horario,
                    horariofinal: (horario+opcao),
                }
            )
            setToggle(true);
        }
        else
            setToggle(false);
    }, [opcao,horario,cliente]);

    return (
        <Box sx={{ width: '100%', mt: 10 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2} />

                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        id="cliente"
                        autoComplete='off'
                        label="Cliente"
                        variant="outlined"
                        value={cliente}
                        onChange={(event) => { setCliente(event.target.value) }}
                    />
                </Grid>

                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel id="id-label-opcao">Opção</InputLabel>

                        <Select
                            labelId="id-label-opcao"
                            id="select-opcao"
                            value={opcao}
                            label="Opção"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Unha</MenuItem>
                            <MenuItem value={2}>Cabelo</MenuItem>
                            <MenuItem value={3}>Cabelo e Unha</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>


                <Grid item xs={1}>
                    <FormControl fullWidth>
                        <InputLabel id="id-label-horario">Horário</InputLabel>

                        <Select
                            labelId="id-label-horario"
                            id="select-horario"
                            value={horario}
                            label="Horário"
                            onChange={handleChangeHorario}
                        >
                            <MenuItem value={1}>10:00</MenuItem>
                            <MenuItem value={2}>10:30</MenuItem>
                            <MenuItem value={3}>11:00</MenuItem>
                            <MenuItem value={4}>11:30</MenuItem>
                            <MenuItem value={5}>12:00</MenuItem>
                            <MenuItem value={6}>12:30</MenuItem>
                            <MenuItem value={7}>13:00</MenuItem>
                            <MenuItem value={8}>13:30</MenuItem>
                            <MenuItem value={9}>14:00</MenuItem>
                            <MenuItem value={10}>14:30</MenuItem>
                            <MenuItem value={11}>15:00</MenuItem>
                            <MenuItem value={12}>15:30</MenuItem>
                            <MenuItem value={13}>16:00</MenuItem>
                            <MenuItem value={14}>16:30</MenuItem>
                            <MenuItem value={15}>17:00</MenuItem>
                            <MenuItem value={16}>17:30</MenuItem>
                            <MenuItem value={17}>18:00</MenuItem>
                            <MenuItem value={18}>18:30</MenuItem>
                            <MenuItem value={19}>19:00</MenuItem>
                            <MenuItem value={20}>19:30</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        onClick={handleClick}
                        sx={{ height: '3.5rem', width: '100%' }}
                        disabled={!toggle}
                    >
                        Adicionar
                    </Button>
                </Grid>

                <Grid item xs={2} />
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3} />

                <Grid item xs={4} sx={{
                    my: 2,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {listaSessoes.map((item, index) => {
                        // return (
                        //     <Typography sx={{ textAlign: 'center' }} mt={1.5} key={index}>{item.}</Typography>
                        //     )
                        console.log(item);
                    })}
                </Grid>

                <Grid item xs={5} />
            </Grid>
        </Box>
    )
}