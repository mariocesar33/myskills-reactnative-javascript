import React, { useState, useEffect } from "react";
import { 
  StyleSheet, 
  Platform, 
  View, 
  Text, 
  TextInput,
  FlatList,
} from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 5 && currentHour < 12) {
      setGretting("Good morning!");
    } else if (currentHour >= 12 && currentHour <= 18 ) {
      setGretting("Good afternoon!")
    } else {
      setGretting("Good nigth!")
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Mário</Text>
      <Text style={styles.greetings}>
        {gretting}
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />
      <Text 
        style={[styles.title, {marginVertical: 50}]}
      >
        My Skills
      </Text>
      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item}) => (
          <SkillCard skill={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    marginTop: 30,
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    borderRadius: 7,
  }, 
  greetings: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  }
});