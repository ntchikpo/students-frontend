import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// URL de base de l'API
const API_URL = "http://localhost:8080/api/students";

// Type TypeScript pour un étudiant
interface Student {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  age: number;
}

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [form, setForm] = useState<Student>({
    nom: "", prenom: "", email: "", age: 0
  });
  const [editId, setEditId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  // Charger tous les étudiants au démarrage
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get(API_URL);
    setStudents(res.data);
  };

  const handleSubmit = async () => {
    if (editId) {
      await axios.put(`${API_URL}/${editId}`, form);
      setEditId(null);
    } else {
      await axios.post(API_URL, form);
    }
    setForm({ nom: "", prenom: "", email: "", age: 0 });
    fetchStudents();
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchStudents();
  };

  const handleEdit = (student: Student) => {
    setEditId(student.id!);
    setForm({ nom: student.nom, prenom: student.prenom,
               email: student.email, age: student.age });
  };

  const handleSearch = async () => {
    if (search.trim() === "") {
      fetchStudents();
    } else {
      const res = await axios.get(`${API_URL}/search?nom=${search}`);
      setStudents(res.data);
    }
  };

  return (
    <div className="container">
      <h1>Gestion des Étudiants</h1>

      {/* Recherche */}
      <div className="search">
        <input placeholder="Rechercher par nom..."
          value={search}
          onChange={e => setSearch(e.target.value)} />
        <button onClick={handleSearch}>Rechercher</button>
        <button onClick={() => { setSearch(""); fetchStudents(); }}>
          Réinitialiser
        </button>
      </div>

      {/* Formulaire */}
      <div className="form">
        <h2>{editId ? "Modifier" : "Ajouter"} un étudiant</h2>
        <input placeholder="Nom" value={form.nom}
          onChange={e => setForm({...form, nom: e.target.value})} />
        <input placeholder="Prénom" value={form.prenom}
          onChange={e => setForm({...form, prenom: e.target.value})} />
        <input placeholder="Email" value={form.email}
          onChange={e => setForm({...form, email: e.target.value})} />
        <input placeholder="Age" type="number" value={form.age}
          onChange={e => setForm({...form, age: Number(e.target.value)})} />
        <button onClick={handleSubmit}>
          {editId ? "Modifier" : "Ajouter"}
        </button>
        {editId && (
          <button onClick={() => {
            setEditId(null);
            setForm({ nom: "", prenom: "", email: "", age: 0 });
          }}>Annuler</button>
        )}
      </div>

      {/* Liste */}
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.nom}</td>
              <td>{s.prenom}</td>
              <td>{s.email}</td>
              <td>{s.age}</td>
              <td>
                <button onClick={() => handleEdit(s)}>✏️</button>
                <button onClick={() => handleDelete(s.id!)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;