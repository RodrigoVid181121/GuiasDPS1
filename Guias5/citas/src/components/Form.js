import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';
import colors from '../src/utils/colors';

const Form = ({citas, setCitas, guardarMostrarForm, guardarCitasStorage})=>{
    //variables para el formulario
    const [paciente, guardarPaciente] = useState('');
    const [propietario, guardarPropietario] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');
    const [sintomas, guardarSintomas] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
        };
    
    const confirmarFecha = date => {
        const opciones = { year: 'numeric', month: 'long', day: "2-digit" };
        guardarFecha(date.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
        };

    // Muestra u oculta el Time Picker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
        };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
        };

    const confirmarHora = hora => {
        const opciones = { hour: 'numeric', minute: '2-digit', hour12: false};
        guardarHora(hora.toLocaleString('es-ES', opciones));
        hideTimePicker();
        };
        
    //Crear nueva cita
    const crearCita=()=>{
        //Validaciones
        if(paciente.trim()==='' || propietario.trim()==='' || telefono.trim()==='' || fecha.trim()==='' || hora.trim()==='' || sintomas.trim()===''){
            mostrarAlerta();

            return;
        }

        // Crear una nueva cita
        const cita = { paciente, propietario, telefono, fecha, hora, sintomas };
        cita.id = shortid.generate();

        // Agregar al state
        const citasNuevo = [...citas, cita];
        setCitas(citasNuevo);

        // Pasar las nuevas citas a storage
        guardarCitasStorage(JSON.stringify(citasNuevo));
        // Ocultar el formulario
        guardarMostrarForm(false);
        // Resetear el formulario
        guardarSintomas('');
        guardarPropietario('');
        guardarPaciente('');
        guardarHora('');
        guardarFecha('');
        guardarTelefono('');
    }

    const mostrarAlerta = () =>{
        Alert.alert('Error', 'Todos los campos son obligatorios',[{text:'OK'}])
    }

    return(
        <>
            <ScrollView style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Paciente:</Text>
                    <TextInput style={styles.input} onChangeText={texto => guardarPaciente(texto)}/>
                </View>

                <View>
                    <Text style={styles.label}>Dueño:</Text>
                    <TextInput style={styles.input} onChangeText={texto => guardarPropietario(texto)}/>
                </View>

                <View>
                    <Text style={styles.label}>Telefono de Contacto:</Text>
                    <TextInput style={styles.input} onChangeText={texto => guardarTelefono(texto)} keyboardType='numeric'/>
                </View>

                <View>
                    <Text style={styles.label}>Fecha:</Text>
                    <Button title='Seleccionar fecha' onPress={showDatePicker}/>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode='date'
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                        headerTextIOS='Elige la fecha'
                        cancelTextIOS='Cancelar'
                        confirmTextIOS='Confirmar'
                    />
                    <Text>{fecha}</Text>
                </View>
                <Text style={styles.label}>Hora:</Text>
                    <Button title='Seleccionar hora' onPress={showTimePicker}/>
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode='date'
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                        headerTextIOS='Elige una hora'
                        cancelTextIOS='Cancelar'
                        confirmTextIOS='Confirmar'
                    />

                    <Text>{hora}</Text>
                <View>
                    <Text style={styles.label}>Sintomas:</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={texto => guardarSintomas(texto)}
                    />
                </View>

                <View>
                    <TouchableHighlight onPress={()=>crearNuevaCita()} style={styles.btnSubmit}>
                        <Text style={styles.textoSubmit}>Crear Nueva Cita</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    formulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1
    },
    label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20
    },
    input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid'
    },
    btnSubmit: {
    padding: 10,
    backgroundColor:colors.BUTTON_COLOR,
    marginVertical: 10
    },
    textoSubmit: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
    }
});

export default Form;
    