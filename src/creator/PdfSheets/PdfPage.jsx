import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';


const PdfPage = ({ personalData = {}, study = {}, experience = [], cert = [], language = [], abilities = []}) => (
  <Document>
    <Page
      size="A4"
      style={{
        padding: 0,
        margin: 0,
        backgroundColor: '#fff',
      }}
    >

      {/* Lewa kolumna */}
      <View>
        <Text >Kontakt</Text>
        <Text>email: {personalData.email || "ala@kotek.pl"}</Text>
        <Text>Telefon: {personalData.numer || "000 000 000"}</Text>
        <Text>Data urodzenia: {personalData.dataUrodzenia || "14.11.2005"}</Text>
        <Text>Miasto: {personalData.miasto || "Krakow"}</Text>
        <Text>Kraj: {personalData.kraj || "Polska"}</Text>
      </View>

      {/* Prawa kolumna */}
      <View>

        {experience.map((exp, id) => (
            <view key={id}>
              <Text>{exp.dataStart}</Text>
              <Text>{exp.dataEnd}</Text>
              <Text>{exp.firma}</Text>
              <Text>{exp.lokalizacja}</Text>
              <Text>{exp.opis}</Text>
            </view>
        ))}

        {cert.map((cer, id) => (
          <view key={id}>
            <Text>{cer.nazwa}</Text>
            <Text>{cer.data}</Text>
            <Text>{cer.organizator}</Text>
            <Text>{cer.opis}</Text>
          </view>
        ))}

        {language.map((language, id) => (
          <view key={id}>
            <Text>{language.language}</Text>
            <Text>{language.level}</Text>
          </view>
        ))}

        {abilities.map((abi, id) => (
          <view key={id}>
            <Text>{abi}</Text>
          </view>
        ))}

        
        <Text >Wykształcenie</Text>
        <Text >{study.szkola || "PWR"}</Text>
        <Text>Poziom: {study.poziom || "inżynier"}</Text>
      </View>
    </Page>
  </Document>
);

export default PdfPage;