/**
 * Censo Municipal
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria:

necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
OKa)El perro mas pesado|
OKb)El porcentaje de enfermos sobre el total de mascotas
OKc)El nombre de la ultima mascota de tipo "otra cosa"
okd)El animal sin pelo con menor temperatura corporal
AAAe)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
okf)Sumando gatos y perros que porcentaje del total de mascotas son?
aaag)Que estado clinico tiene la menor cantidad de mascotas
okH)Cual es el promedio de kilos de peso de tomando todas las mascotas
oki)El nombre y raza del gato sin pelos mas liviano
 */
function probarEjercicio()
{
	var tipoMascota;
	var pelajeMascota;
	var edadMascota;
	var nombreMascota;
	var razaMascota
	var pesoMascota;
	var estadoClinicoMascota;
	var temperaturaMascota;
	var respuesta=true;
	var perroMasPesado;
	var flagPerroMasPesado=true;
	var ultimoNombreOtraCosa;
	var gatoSinPelosMasLiviano;
	var nombreGatoSinPelosMasLiviano;
	var razaGatoSinPelosMasLiviano;
	var flagGatoSinPelosMasLiviano=true;
	var mascotaSinPeloMenorTemperatura
	var flagMascotaSinPeloMenorTemperatura=true;
	var contadorMascotas=0;
	var contadorGatos=0;
	var contadorPerros=0;
	var contadorOtraCosa=0
	var contadorMascotasEnfermas=0;
	var porcentajeMascotasEnfermas;
	var porcentajeGatosyPerrosRespectoMascotas;
	var acumuladorTemperaturaGato=0;
	var acumuladorTemperaturaPerro=0;
	var acumuladorTemperaturaOtraCosa=0;
	var contadorEnfermo=0;
	var contadorInternado=0;
	var contadorAdopcion=0;
	var acumuladorPeso=0;
	var promedioPeso;
	var promedioGatoTemperatura;
	var promedioPerroTemperatura;
	var PromedioOtraCosaTemperatura;
	
	

	do
	{
		tipoMascota=prompt("Es gato perro u otra cosa?");
		while(tipoMascota!="perro"&&tipoMascota!="gato"&&tipoMascota!="otra cosa")
		{
			tipoMascota=prompt("Ingrese dato valido (gato/perro/otra cosa)");
		}
		pelajeMascota=prompt("Ingrese pelaje (corto/largo/sin pelo)");
		while(pelajeMascota!="corto"&&pelajeMascota!="largo"&&pelajeMascota!="sin pelo")
		{
			pelajeMascota=prompt("Ingrese pelaje valido (corto/largo/sin pelo)");
		}
		edadMascota=prompt("Ingrese edad mascota");
		edadMascota=parseInt(edadMascota);
		while(isNaN(edadMascota)==true || edadMascota<0||edadMascota>25)
		{
			edadMascota=prompt("Ingrese edad valida");
			edadMascota=parseInt(edadMascota);
		}
		nombreMascota=prompt("Ingrese nombre mascota");
		while(isNaN(nombreMascota)==false)
		{
			nombreMascota=prompt("Ingrese nombre valido");
		}
		razaMascota=prompt("Ingrese raza mascota");
		while(isNaN(razaMascota)==false)
		{
			razaMascota=prompt("Ingrese raza valida");
		}
		pesoMascota=prompt("Ingrese peso mascota");
		pesoMascota=parseInt(pesoMascota);
		while(isNaN(pesoMascota)==true || pesoMascota<0)
		{
			pesoMascota=prompt("Ingrese peso valido");
			pesoMascota=parseInt(pesoMascota);
		}
		estadoClinicoMascota=prompt("Estado clinico (enfermo/internado/adopcion)");
		while(estadoClinicoMascota!="enfermo"&&estadoClinicoMascota!="internado"&&estadoClinicoMascota!="adopcion")
		{
			estadoClinicoMascota=prompt("Ingrese estado clinico valido (enfermo/internado/adopcion)");
		}
		temperaturaMascota=prompt("Ingrese temperatura mascota");
		temperaturaMascota=parseInt(temperaturaMascota);
		while(isNaN(temperaturaMascota)==true || temperaturaMascota<30||temperaturaMascota>50)
		{
			temperaturaMascota=prompt("Ingrese temperatura valida (entre 30 y 50)");
			temperaturaMascota=parseInt(temperaturaMascota);
		}


		switch (tipoMascota)
		{
			case "gato"://El nombre y raza del gato sin pelos mas liviano
				contadorGatos=contadorGatos+1;
				acumuladorTemperaturaGato=acumuladorTemperaturaGato+temperaturaMascota;
				if(pelajeMascota=="sin pelo")
				{
					if(flagGatoSinPelosMasLiviano==true)
					{
						gatoSinPelosMasLiviano=pesoMascota;
						nombreGatoSinPelosMasLiviano=nombreMascota;
						razaGatoSinPelosMasLiviano=razaMascota;
						flagGatoSinPelosMasLiviano=false;
					}
					else if (gatoSinPelosMasLiviano<pesoMascota)
					{
						gatoSinPelosMasLiviano=pesoMascota;
						nombreGatoSinPelosMasLiviano=nombreMascota;
						razaGatoSinPelosMasLiviano=razaMascota;
					}
				}
				break;

			case "perro":
				contadorPerros=contadorPerros+1;
				acumuladorTemperaturaPerro=acumuladorTemperaturaPerro+temperaturaMascota;
				if(flagPerroMasPesado==true)
				{
					perroMasPesado=pesoMascota;	
					flagPerroMasPesado=false;		
				}
				else if(perroMasPesado>pesoMascota)
				{
					perroMasPesado=pesoMascota;
				}
				break;

			case "otra cosa":
				contadorOtraCosa=contadorOtraCosa+1;
				acumuladorTemperaturaOtraCosa=acumuladorTemperaturaOtraCosa+temperaturaMascota;
				ultimoNombreOtraCosa=nombreMascota;
				break;
		}
		switch(estadoClinicoMascota)
		{
			case "enfermo":	
				contadorEnfermo=contadorEnfermo+1;
				break;
			case "internado":
				contadorInternado=contadorInternado+1;
				break;
			case "adopcion":
				contadorAdopcion=contadorAdopcion+1;
				break;
		}

		contadorMascotas=contadorMascotas+1
		acumuladorPeso=pesoMascota+acumuladorPeso;
		respuesta=confirm("desea continuar?");

		if (pelajeMascota=="sin pelo")
		{
			if(flagMascotaSinPeloMenorTemperatura==true)
			{
				mascotaSinPeloMenorTemperatura=temperaturaMascota;
				flagMascotaSinPeloMenorTemperatura=false;
			}
			else if(mascotaSinPeloMenorTemperatura>temperaturaMascota)
			{
				mascotaSinPeloMenorTemperatura=temperaturaMascota;
			}
		}
	
		if(estadoClinicoMascota=="enfermo")
		{
			contadorMascotasEnfermas=contadorMascotasEnfermas+1;
		}
	
		promedioPeso=acumuladorPeso/contadorMascotas;
	
		porcentajeMascotasEnfermas=contadorMascotasEnfermas/contadorMascotas;		
	}while(respuesta==true);
	
	

	
	promedioGatoTemperatura=acumuladorTemperaturaGato/contadorGatos;
	promedioPerroTemperatura=acumuladorTemperaturaPerro/contadorPerros;
	PromedioOtraCosaTemperatura=acumuladorTemperaturaOtraCosa/contadorOtraCosa;
	if(promedioGatoTemperatura>promedioPerroTemperatura&&promedioGatoTemperatura>PromedioOtraCosaTemperatura)
	{
		document.writeln("e) Gatos tienen el mayor promedio Temperatura");
	}
	if(promedioPerroTemperatura>promedioGatoTemperatura&&promedioPerroTemperatura>PromedioOtraCosaTemperatura)
	{
		document.writeln("e) Perros tienen el mayor promedio Temperatura");
	}
	if(PromedioOtraCosaTemperatura>promedioPerroTemperatura&&PromedioOtraCosaTemperatura>promedioGatoTemperatura)
	{
		document.writeln("e) Otra cosa tienen el mayor promedio Temperatura");
	}


	porcentajeGatosyPerrosRespectoMascotas=(contadorGatos+contadorPerros)/contadorMascotas;

	if(contadorInternado<contadorEnfermo&&contadorInternado<contadorAdopcion);
	{
		document.writeln("g) El estado clinico con menor cantidad de mascotas es Internado");
	}
	if(contadorEnfermo<contadorInternado&&contadorEnfermo<contadorAdopcion);
	{
		document.writeln("g) El estado clinico con menor cantidad de mascotas es Enfermo");
	}
	if(contadorAdopcion<contadorEnfermo&&contadorAdopcion<contadorInternado);
	{
		document.writeln("g) El estado clinico con menor cantidad de mascotas es Adopción");
	}


document.writeln("a) El perro mas pesado: "+perroMasPesado);
document.writeln("b) El porcentaje de enfermos sobre el total de mascotas: "+porcentajeMascotasEnfermas);
document.writeln("c) El nombre de la ultima mascota de tipo otra cosa: "+ultimoNombreOtraCosa);
document.writeln("d) El animal sin pelo con menor temperatura corporal: "+mascotaSinPeloMenorTemperatura);
document.writeln("f) Porcentaje de gatos y perros respecto a mascotas: " +porcentajeGatosyPerrosRespectoMascotas);
document.writeln("h) El promedio de kilos de peso de tomando todas las mascotas: "+promedioPeso+" kg.");
document.writeln("El nombre y raza del gato sin pelos mas liviano: " +nombreGatoSinPelosMasLiviano+" y " +razaGatoSinPelosMasLiviano);



}