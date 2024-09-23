plugins {
  id("com.android.application")

  // Aplica el plugin de Google Services
  id("com.google.gms.google-services")
}

dependencies {
  // Importa el BoM de Firebase (Bill of Materials)
  implementation(platform("com.google.firebase:firebase-bom:33.3.0"))

  // Agrega las dependencias para Firebase que deseas usar
  implementation("com.google.firebase:firebase-analytics")  // Ejemplo
}
