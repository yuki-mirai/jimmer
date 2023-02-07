import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.7.0"
	id("io.spring.dependency-management") version "1.0.12.RELEASE"
	kotlin("jvm") version "1.6.21"
	kotlin("plugin.spring") version "1.6.21"
	id("com.google.devtools.ksp") version "1.7.10-1.0.6"
}

group = "org.babyfish.jimmer.example.kt"
version = "0.6.35-0.7-preview"
java.sourceCompatibility = JavaVersion.VERSION_1_8

repositories {
	mavenCentral()
}

dependencies {

	implementation("org.babyfish.jimmer:jimmer-spring-boot-starter:0.6.35-0.7-preview")
	ksp("org.babyfish.jimmer:jimmer-ksp:0.6.35-0.7-preview")

	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	testImplementation("org.springframework.boot:spring-boot-starter-test")

	implementation("org.springdoc:springdoc-openapi-ui:1.6.11")
	implementation("org.springframework.kafka:spring-kafka:2.9.0")

	runtimeOnly("com.h2database:h2:2.1.212")
	runtimeOnly("mysql:mysql-connector-java:8.0.30")
	runtimeOnly("io.lettuce:lettuce-core:6.2.0.RELEASE")
}

// Without this configuration, gradle command can still run.
// However, Intellij cannot find the generated source.
kotlin {
	sourceSets.main {
		kotlin.srcDir("build/generated/ksp/main/kotlin")
	}
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "1.8"

		// Even without any code changes, modifying the dto file
		// should cause the KSP to be triggered
		inputs.files("src/main/dto")
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}
