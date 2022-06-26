import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export function Acess() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  );

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: { name, email },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="md:w-4/5 max-w-[1100px] flex lg:flex-row items-center justify-between mt-20 mx-auto flex-col w-3/4">
        <div className="max-w-[640px] mr-14">
          <div className="w-1/5">
            <Logo />
          </div>

          <h1 className="mt-8 text-[2.5rem] leading-relaxed font-bold">
            Increase your habilities studyng with us!
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            You will master in practice one of the most used technologies and
            with high demand to access the best opportunities in the market.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded lg:w-1/3 w-full mt-8">
          <strong className="text-2xl mb-6 block text-center">Sign up for free</strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              type="text"
              className="bg-gray-900 rounded px-5 h-14 focus-visible:outline-none focus-visible:outline-red-500"
              placeholder="Your full name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email" id="email"
              className="bg-gray-900 rounded px-5 h-14 focus-visible:outline-none focus-visible:outline-red-500"
              placeholder="Type your best email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-red-500 uppercase py-4 rounded font-bold text-sm hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              Secure my vacancy
            </button>
          </form>
        </div>
      </div>

      <div>
        <img src="/src/assets/group-elements.png" className="mt-10" alt="" />
      </div>
      <Footer />
    </div>
  );
}
