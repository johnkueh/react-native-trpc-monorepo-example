import { singleton } from "tsyringe";

@singleton()
export class HelloService {
	constructor() {}

	public getGreetings = async () => {
		return [
			{
				message: "Bienvenido a tu nuevo hogar.",
			},
			{
				message: "Benvenuto nella tua nuova casa.",
			},
			{
				message: "Bienvenue dans votre nouvelle maison.",
			},
		];
	};

  public getGreetingForName = async (name: string) => {
    return {
      message: `Your name is: ${name}.`
    };
  }
}
