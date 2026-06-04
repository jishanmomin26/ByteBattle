import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const participants = [
  {
    rank: 1,
    name: "Khan Shadab Tabarak",
    team: "Matrix",
  },
  {
    rank: 2,
    name: "Ubaid Qureshi",
    team: "SparkTech",
  },
  {
    rank: 3,
    name: "Shaikh Mohd Siddique",
    team: "Deikaiju",
  },
  {
    rank: 4,
    name: "Mohammed Taha Farooqui",
    team: "Game of Codes",
  },
  {
    rank: 5,
    name: "Khan Moinuddin Jamal Ahmed",
    team: "VCare Labs",
  },
  {
    rank: 6,
    name: "Ansari Sarah Mohd Hamid",
    team: "Logic Loop",
  },
  {
    rank: 7,
    name: "Owais Ashfaque Shaikh",
    team: "Faaaaah!!",
  },
];

export default function TopParticipants() {
  return (
    <section
      id="top-participants"
      className="py-20 bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center text-white mb-4"
        >
          Top 7 Participants
        </motion.h2>

        <p className="text-center text-gray-400 mb-12">
          Outstanding performers of ByteBattle 2026
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {participants.map((participant) => (
            <motion.div
              key={participant.rank}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900 border border-cyan-500/30 rounded-2xl p-5 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold text-xl">
                  #{participant.rank}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {participant.name}
                  </h3>

                  <p className="text-cyan-400 font-medium">
                    Team: {participant.team}
                  </p>
                </div>

                <Trophy className="ml-auto text-yellow-400" size={28} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
const TopParticipants = () => {
  return (
    <div>
      Top Participants
    </div>
  );
};

export default TopParticipants;