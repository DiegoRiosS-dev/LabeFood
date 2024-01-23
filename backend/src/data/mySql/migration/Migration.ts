import { BaseDatabase } from "../BaseDatabase";
import { table } from "../../../models/tableName";
import { restaurantToSql } from "./restaurantToSql";
import { productToSql } from "./productToSql";


let hasTable:boolean = false;
class Migrations extends BaseDatabase {
  
  public createTables = async ():Promise<void> => {
    try{
      await Migrations.connection.raw(`
        DROP TABLE IF EXISTS ${table.address};
        DROP TABLE IF EXISTS ${table.payment};
        DROP TABLE IF EXISTS ${table.order};
        DROP TABLE IF EXISTS ${table.user};
        DROP TABLE IF EXISTS ${table.product};
        DROP TABLE IF EXISTS ${table.restaurant};
      
      
        CREATE TABLE ${table.user} (
          id VARCHAR(255) PRIMARY KEY UNIQUE NOT NULL,
          name VARCHAR(50) NOT NULL,
          email VARCHAR(255) NOT NULL UNIQUE,
          cpf VARCHAR(20)	NOT NULL UNIQUE,
          password VARCHAR(30) NOT NULL,
          has_Address BOOLEAN NOT NULL
        );
        CREATE TABLE ${table.address} (
          id VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
          street VARCHAR(50) NOT NULL,
          number INT NOT NULL,
          neighbourhood VARCHAR(50) NOT NULL,
          city VARCHAR(50) NOT NULL,
          state VARCHAR(50) NOT NULL,
          complement VARCHAR(150) NOT NULL,
          fk_user VARCHAR(255) NOT NULL,
          FOREIGN KEY(fk_user) REFERENCES ${table.user}(id)
        );
        
        CREATE TABLE ${table.restaurant} (
          id VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
          name VARCHAR(50) NOT NULL UNIQUE,
          logo_url VARCHAR(255),
          category VARCHAR(30) NOT NULL,
          description VARCHAR(255) NOT NULL ,
          delivery_time INT NOT NULL,
          shipping INT NOT NULL,
          address VARCHAR(150)    
        );
        CREATE TABLE ${table.product} (
          id VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
          name VARCHAR(50) NOT NULL,
          url_img VARCHAR(255) NOT NULL,
          category VARCHAR(30) NOT NULL,
          price INT NOT NULL,
          fk_restaurant VARCHAR(255) NOT NULL,
          FOREIGN KEY(fk_restaurant) REFERENCES ${table.restaurant}(id)
        );
        
        CREATE TABLE ${table.order} (
          id VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
          order_hours VARCHAR(10) NOT NULL,
          fk_user VARCHAR(255) NOT NULL,
          fk_product VARCHAR(255) NOT NULL,
          FOREIGN KEY(fk_user) REFERENCES ${table.user}(id),
          FOREIGN KEY(fk_product) REFERENCES ${table.product}(id)
        );
        
        CREATE TABLE ${table.payment} (
          id VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
          payment VARCHAR(20) NOT NULL, 
          fk_order VARCHAR(255) NOT NULL,
          FOREIGN KEY(fk_order) REFERENCES ${table.order}(id)
        ); 
      `)
      hasTable = true;
    }catch(error:any){
      console.log(error.message || error.sqlMessage)
    }
  };

  public insertRestaurant = async ():Promise<void> => {
    try{
      for(let i=0; i < restaurantToSql.length; i++){
        await Migrations.connection(table.restaurant).insert(restaurantToSql[i])
      }
      console.log("!-- All Restaurant Add --!")
      
    }catch(error:any){
      console.log(error.sqlMessage || error.message)
    }
    
  };

  public insertProduct = async ():Promise<void> => {
    for(let i=0; i < productToSql.length; i++){
      await Migrations.connection(table.product).insert(productToSql[i])
      .then( () => {
        productToSql[i].name === productToSql[productToSql.length -1].name ?
          console.log("!-- All productToSql registred --!") :{}
      }).catch( (error:any) => console.log(error.sqlMessage || error.message))
      .finally( async () => productToSql[i].name === productToSql[productToSql.length -1].name ?
        Migrations.connection.destroy() :{}
      )
    }
  };

};
const migration = new Migrations();
hasTable ? migration.createTables() : {};
setTimeout( () => migration.insertRestaurant() , 5000);
setTimeout( () => migration.insertProduct() , 9000);



